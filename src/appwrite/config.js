import conf from '../conf/conf.js';
import { Client, Databases ,Storage,Query,ID,Avatars} from "appwrite";

export class Service{
    client=new Client();
    databases;
    bucket;
    avatars;

    constructor(){
        this.client.setEndpoint(conf.appwriteProjectUrl).setProject(conf.appwriteProjectId);
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);
        this.avatars=new Avatars(this.client);
    }
    async saveUserToDB({accountId,name,email,username}){
        const imageUrl = this.avatars.getInitials(name);
        try {
            const newUser=await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteUsersCollectionId,
                ID.unique(),
                {accountId,name,email,username,imageUrl}
                )
            return newUser;
        } catch (error) {
            console.log("Service : saveUserToDB :: ",error);
        }
    }

    async getUserData({accountId}){
        // console.log("accountId",accountId);
        try {
            const currentUserData=await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteUsersCollectionId,
                [Query.equal("accountId",accountId)]
                )
            return currentUserData.documents[0];
        } catch (error) {
            console.log("service : getUserData :: ",error);
        }
    }

}

const service=new Service();
export default service;



