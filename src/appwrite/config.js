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
    async deleteFileFromBucket({fileId}){
        try{
            return await this.bucket.deleteFile(conf.appwriteBucketId,fileId);
        }catch(error){
            console.log("service : deleteFileFromBucket() :: ",error);
        }
    }
    async addProfileImg({profileImg,documentId}){
        console.log("add profile Image called")
        try{
            const profileimgId = await this.bucket.createFile(conf.appwriteBucketId,ID.unique(),profileImg);
            if(profileimgId){
                const fileUrl=this.getFilePreview(profileimgId.$id);
                return await this.databases.updateDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteUsersCollectionId,
                    documentId,
                    {imageUrl:fileUrl,imageId:profileimgId.$id},
                    )
            }
        }catch(error){
            console.log("service : addProfileImg :: ",error);
        }
    }
    async updateProfileImg({profileImg, previmgId,documentId}){
        console.log("update profile image call");
        try{
            const process= await this.addProfileImg({profileImg:profileImg,documentId:documentId});
            if(process){
            return await this.deleteFileFromBucket({fileId:previmgId});
            }
        }catch(error){
        console.log("service : updateProfileImg :: ",error);
        }
    }
    async addCoverImg({coverImg,documentId}){
        console.log("add cover Image called")
        try{
            const coverimgId = await this.bucket.createFile(conf.appwriteBucketId,ID.unique(),coverImg);
            if(coverimgId){
                return await this.databases.updateDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteUsersCollectionId,
                    documentId,
                    {coverImageId:coverimgId.$id},
                    )
            }
        }catch(error){
            console.log("service : addCoverImg :: ",error);
        }
    }
    async updateCoverImg({coverImg, previmgId,documentId}){
        console.log("update cover image call");
        try{
            const process= await this.addCoverImg({coverImg:coverImg,documentId:documentId});
            if(process){
            return await this.deleteFileFromBucket({fileId:previmgId});
            }
        }catch(error){
        console.log("service : updateCoverImg :: ",error);
        }
    }
    getFilePreview(fileId){
        return this.bucket.getFilePreview(conf.appwriteBucketId,fileId).href;
    }

}

const service=new Service();
export default service;



