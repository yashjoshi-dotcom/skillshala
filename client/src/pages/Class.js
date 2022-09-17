import React, { useState } from "react";
import { useEffect } from "react";
import { db } from "../firebase-config";
import {
	collection,
	getDocs,
	addDoc,
	updateDoc,
	deleteDoc,
	doc,
} from "firebase/firestore";


const Class = () => {
  return (
    <div>This is a class</div>
  )
}

export default Class