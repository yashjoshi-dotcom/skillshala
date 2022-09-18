import React from "react";
import css from "./css.css";
import { useState } from "react";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import Questions from "../components/Questions";
import {storage} from "../firebase-config";
import {ref,uploadBytesResumable,getDownloadURL } from "@firebase/storage";


const Profile = () => {

    const [progress,setProgress]=useState(0);
    const pdfupload =(e)=>{
        e.preventDefault();
        const file =e.target[0].files[0];
        uploadFile(file);
        console.log(file);
    }
    const uploadFile=(file)=>{
        if(!file){
            window.alert("Pls choose a file");
            return;
        }
        const storageRef=ref(storage,`/files/${file.name}`);
        const uploadTask=uploadBytesResumable(storageRef,file);
        uploadTask.on("state_changed",(snapshot)=>{
            const prog =Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100);
            setProgress(prog);
             
        },(err)=>{console.log(err);},
        ()=>{
            getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url))
        }
        )
    }
    const [questionsList, setQuestionsList] = useState([]);
    const [loading, setLoading] = useState(true);
    var c = 0;
    async function fetchQuestions() {
        // setLoading(true);
        const querySnapshot = await getDocs(collection(db, "Users"));
        console.log("hello")
        if (c == 1) return;
        c = c + 1;


        querySnapshot.forEach((doc) => {
            const id = doc.id;
            const fullname = doc.data().fullname;
            const gender = doc.data().gender;
            // const TimeStamp = doc.data().TimeStamp;
            // const Upvote = doc.data().Upvote;
            // const Downvote = doc.data().Downvote;

            console.log(id, fullname, gender);

            setQuestionsList((prevState) => {
                const newList = [...prevState];
                newList.push({ id, fullname, gender });
                return newList;
                // return [
                //     prevData,
                //     {
                //         id,
                //         author: Author,
                //         question: Question,
                //         timeStamp: TimeStamp,
                //         upVote: Upvote,
                //         downVote: Downvote,
                //     },
                // ];
            });
            return;
        });
        setLoading(false);


    }

    useEffect(() => {
        fetchQuestions();
        console.log(questionsList);
    }, []);




    return (
        <>
            <div>
                <div class="bg-gray-700">


                    <div class="container mx-auto py-5 p-5">
                        <div class="md:flex flex-nowrap md:-mx-2 ">
                            {/* <!-- Left Side --> */}
                            <div class="w-full md:w-3/12 md:mx-2 ">
                                {/* <!-- Profile Card --> */}
                                <div class=" bg-black shadow-slate-900 bg-opacity-30 text-white  shadow-lg p-3 border-t-4 border-green-400">
                                    <div class="image overflow-hidden">
                                        <img class="h-auto w-full mx-auto"
                                            src="https://i.etsystatic.com/36532523/r/il/97ae46/4078306713/il_1140xN.4078306713_n74s.jpg"
                                            alt="" />
                                    </div>
                                    <h1 class="text-gray-100 font-bold text-xl leading-8 my-1">tanush</h1>


                                    <ul
                                        class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                        <li class="flex items-center py-3">
                                            <span>Status</span>
                                            <span class="ml-auto"><span
                                                class="bg-green-500 py-1 px-2 rounded text-white text-sm">Student</span></span>
                                        </li>
                                        <li class="flex items-center py-3">
                                            <span>Number of Items Listed</span>
                                            <span class="ml-auto">5</span>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- End of profile card --> */}
                                <div class="my-4"></div>
                                {/* <!-- Friends card --> */}
                                {/* <div class="bg-white p-3 hover:shadow">
                                    <div class="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                                        <span class="text-green-500">
                                            <svg class="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </span>
                                        <span>Similar Profiles</span>
                                    </div>
                                    <div class="grid grid-cols-3">
                                        <div class="text-center my-2">
                                            <img class="h-16 w-16 rounded-full mx-auto"
                                                src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                                                alt=""/>
                                                <a href="#" class="text-main-color">Kojstantin</a>
                                        </div>
                                        <div class="text-center my-2">
                                            <img class="h-16 w-16 rounded-full mx-auto"
                                                src="https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4"
                                                alt=""/>
                                                <a href="#" class="text-main-color">James</a>
                                        </div>
                                        <div class="text-center my-2">
                                            <img class="h-16 w-16 rounded-full mx-auto"
                                                src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                                                alt=""/>
                                                <a href="#" class="text-main-color">Natie</a>
                                        </div>
                                        <div class="text-center my-2">
                                            <img class="h-16 w-16 rounded-full mx-auto"
                                                src="https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/f04b52da-12f2-449f-b90c-5e4d5e2b1469_361x361.png"
                                                alt=""/>
                                                <a href="#" class="text-main-color">Casey</a>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <!-- End of friends card --> */}
                            </div>
                            {/* <!-- Right Side --> */}
                            <div class="w-full md:w-9/12 mx-2 ">
                                {/* <!-- Profile tab --> */}
                                {/* <!-- About Section --> */}
                                <div class="bg-black shadow-slate-900 bg-opacity-30 text-white  shadow-lg p-3 rounded-sm">
                                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                        <span class="text-green-500">
                                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </span>
                                        <span class="tracking-wide text-white">About</span>
                                    </div>
                                    <div class="text-white">
                                        <div class="grid md:grid-cols-2 text-sm before:hidden after:hidden">
                                            <div class="flex">
                                                <div class="px-4 py-2 font-semibold w-[50%]">Name</div>
                                                <div class="px-4 py-2 w-[50%]">Tanush</div>
                                            </div>
                                            <div class="flex">
                                                <div class="px-4 py-2 font-semibold w-[50%]">Nationality</div>
                                                <div class="px-4 py-2 w-[50%]">Indian</div>
                                            </div>
                                            <div class="flex">
                                                <div class="px-4 py-2 font-semibold w-[50%]">Gender</div>
                                                <div class="px-4 py-2 w-[50%]">Prefer Not to Say</div>
                                            </div>
                                            <div class="flex">
                                                <div class="px-4 py-2 font-semibold w-[50%]">College.</div>
                                                <div class="px-4 py-2 w-[50%]">Delhi Technological University</div>
                                            </div>
                                            <div class="flex">
                                                <div class="px-4 py-2 font-semibold w-[50%]">State</div>
                                                <div class="px-4 py-2 w-[50%]">New Delhi</div>
                                            </div>
                                            <div class="flex">
                                                <div class="px-4 py-2 font-semibold w-[50%]">Email.</div>
                                                <div class="px-4 py-2 w-[50%]">
                                                    <a class="text-blue-800" href="mailto:jane@example.com">chaudharytanush15@gmail.com</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                {/* <!-- End of about section --> */}

                                <div class="my-4"></div>

                                {/* <!-- Teacher's section--> */}
                                <div class=" bg-black shadow-slate-900 bg-opacity-30 text-white  shadow-lg p-3  rounded-sm">
                                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                        <span class="text-green-500">
                                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </span>
                                        <span class="tracking-wide text-white">Host Your Lecture</span>
                                    </div>
                                    <div class=" before:hidden after:hidden">
                                        <form className="dark" action="">
                                            <div className="mb-6">
                                                <label
                                                    htmlFor="text"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                >
                                                    Subject Name
                                                </label>
                                                <input
                                                    name="item_name"
                                                    value=""
                                                    type="text"
                                                    id="text"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="Subject name..."
                                                    onChange=""
                                                    required
                                                />
                                            </div>

                                            <div className="mb-6">
                                                <label
                                                    htmlFor="text"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                >
                                                    Topic Name
                                                </label>
                                                <input
                                                    name="item_name"
                                                    value=""
                                                    type="text"
                                                    id="text"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="Topic you are teaching..."
                                                    onChange=""
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                    htmlFor="user_avatar"
                                                >
                                                    Upload file
                                                </label>
                                                <input
                                                    className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                                    aria-describedby="user_avatar_help"
                                                    id="user_avatar"
                                                    type="file"
                                                //   onChangeCapture={(e) => uploadImage(e)}
                                                />
                                                <h3>Uploaded {progress} %</h3>
                                            </div>

                                            <div className="my-5 text-center">
                                                <button
                                                    type="submit"
                                                    className="focus:outline-none mx-auto  text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2.5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 "
                                                    onClick={pdfupload} >
                                                    Start Class
                                                </button>
                                            </div>

                                        </form>

                                        {/* {userdata.list.map((dataa, key) => {
                                return (<>
                                    <button
                        className=" text-left"
                        onClick={() => {
                          navigate("/knowmore", {
                            state: { item_id: dataa._id },
                          });
                        }}
                      >
                                <Cards productName={dataa.item_name} productInfo={dataa.item_description} productImage={dataa.item_immage}/>
                                </button>
                                <Routes>
                                <Route
                                  path="/knowmore"
                                  element={<KnowMore a={dataa._id} />}
                                />
                              </Routes>
                              </>
                              );
                                    })} */}
                                    </div>
                                    {/* <!-- End of Experience and education grid --> */}
                                </div>
                                {/* <!-- End of profile tab --> */}
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}
export default Profile;