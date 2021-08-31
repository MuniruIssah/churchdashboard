import { message } from "antd";
import React from "react";
import { auth, db } from "./config";
//Update the word of the day
export const updateWOD = (word) => {
  db.collection("word-of-the-day")
    .doc("yq594hLGEOz2hM94hJPg")
    .update({
      wod: word,
    })
    .then(() => {
      message.success("The Word for today has been updated");
    });
};
//Get a collection's count
export const collectionCount = (collectionName) => {
  db.collection(collectionName).onSnapshot((snapshot) => {
    localStorage.setItem(`${collectionName}Count`, snapshot.docs.length);
  });
  return localStorage.getItem(`${collectionName}Count`);
};
//Get a collection
export const getCollection = (collectionName) => {
  db.collection(collectionName).onSnapshot((snapshot) => {
    let allDocumentData = [];
    snapshot.docs.map((d) => {
      allDocumentData.push(d.data());
    });
    console.log(allDocumentData);
    localStorage.setItem(collectionName, JSON.stringify(allDocumentData));
  });

  return localStorage.getItem(collectionName);
};
//Creation with no file
export const createWithNoFile = (collectionName, body) => {
  db.collection(collectionName).add(body);
};
