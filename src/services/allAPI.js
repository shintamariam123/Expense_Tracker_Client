// import axios from "axios";
import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./serverUrl";


//register api - called by component 
export const registerAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)
 }
 
//  login  api - called by component 
 export const loginAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)
 }

 //add transaction
 export const addTransactionAPI = async (reqBody,reqHeader)=>{
   return await commonAPI("POST",`${SERVER_URL}/addTransaction`,reqBody,reqHeader)
 }

//  get all transaction
 export const getAllTransactionAPI = async (reqHeader) =>{
   return await commonAPI("GET",`${SERVER_URL}/getAllTransaction`,"",reqHeader)
 }

 //get user transaction
 export const getUserTransactionAPI = async (reqHeader) =>{
  return await commonAPI("GET",`${SERVER_URL}/getUserTransaction`,"",reqHeader)
}

//  edit transaction
 export const editTransactionAPI = async (transactionId,reqBody,reqHeader)=>{
   return await commonAPI("PUT",`${SERVER_URL}/editTransaction/${transactionId}`,reqBody,reqHeader)
 }

 //delete transaction

 export const deleteTransactionAPI = async (transactionId,reqHeader)=>{
   return await commonAPI("DELETE",`${SERVER_URL}/deleteTransaction/${transactionId}`,{},reqHeader)
 }
 

