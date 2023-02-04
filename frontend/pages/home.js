import { Avatar, Dialog, DialogTitle } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import QRCode from "qrcode";
import QrReader from "react-qr-scanner";
import axios from "axios";
export default function Home() {
  const router = useRouter();
  const [src, setSrc] = useState("");
  const [doctorPatient, setdoctorPatient] = useState([]);
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [userInfo, setuserInfo] = useState({});
  useEffect(() => {
    setuserInfo(JSON.parse(localStorage.getItem("userInfo")));
  }, []);
  useEffect(() => {
    initstate();
  }, [userInfo]);
  const initstate = async () => {
    if (userInfo["_id"] != undefined) {
      console.log(userInfo["_id"]);
      if (userInfo.role == "Patient") {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API}` + "LoadDoctor",
          { id: userInfo["_id"] }
        );
        console.log(response.data);
        setdoctorPatient(response.data);
      } else if (userInfo.role == "Doctor") {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API}` + "LoadPatient",
          { id: userInfo["_id"] }
        );
        console.log(response.data);
        setdoctorPatient(response.data);
      }
    }
  };
  const handleClose = (value) => {
    setOpen(false);
  };
  if (userInfo.role == "Patient") {
    return (
      <div>
        <div className="bg-purple-100" style={{ height: "90vh" }}>
          <div className="flex flex-row justify-between items-center pt-4 px-12">
            <h1 className="font-head text-7xl">LifeClicks</h1>
            <div className="flex flex-row items-center">
              <Avatar
                sx={{ width: 90, height: 90 }}
                src={userInfo.profileURL}
              ></Avatar>
              <button
                class="x-6 m-12 drop-shadow-xl font-small rounded-md bg-gradient-to-r from-purple-400 to-purple-500 py-3 px-8 text-white"
                type="submit"
                onClick={() => {
                  localStorage.setItem("userInfo", "");
                  router.push("/");
                }}
              >
                <div className="flex flex-row items-center">
                  <span className="text-xl">Logout</span>
                </div>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 ">
            <h3
              className="pt-4 px-20 font-head text-9xl text-indigo-900 font-bold align-middle"
              style={{ paddingTop: "13vh" }}
            >
              Welcome back, {userInfo.Name}!
            </h3>
            <div className="flex justify-center">
              {" "}
              <img src="https://cdn3d.iconscout.com/3d/premium/thumb/medicine-3494848-2928740.png"></img>
            </div>
          </div>
        </div>
        <div className="w-screen px-20 flex flex-row relative bottom-20">
          <div className="w-1/6 flex justify-center items-center">
            <div
              className="py-4 drop-shadow-xl font-small rounded-md bg-gradient-to-r from-purple-400 to-purple-500 px-8"
              onClick={() => {
                QRCode.toDataURL(userInfo["_id"]).then((data) => {
                  setSrc(data);
                });
                setOpen(true);
              }}
            >
              <span className="text-white text-justify align-middle">
                Generate QR Code
              </span>
            </div>
          </div>
          <div className="p-8 w-full">
            <input
              className="w-full px-4 py-8 border placeholder:font-small placeholder:text-2xl text-2xl border-gray-300 rounded outline-none focus:ring-purple-500 focus:border-purple-500 focus:ring-1"
              placeholder="Search for doctors,prescriptions"
            ></input>
          </div>
          <div className="w-1/6 flex justify-center items-center">
            <div className="p-8 drop-shadow-xl font-small rounded-full bg-gradient-to-r from-purple-400 to-purple-500  flex items-center justify-center">
              <MdSearch size={32} color="white" />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-5xl font-small text-black ml-24">Your doctors</h1>
          <div className="overflow-x-auto flex flex-row px-24 py-12">
            {doctorPatient.map((v) => {
              return (
                <div
                  style={{ width: "240px" }}
                  className="rounded-md drop-shadow-2xl mx-8 bg-purple-50 py-16  flex flex-col justify-center items-center"
                >
                  <Avatar
                    sx={{ width: 120, height: 120 }}
                    src={v.profileURL}
                  ></Avatar>
                  <span className="mt-8 text-xl font-small w-90 text-justify">
                    {v.Name}{" "}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h1 className="text-5xl font-small text-black ml-24">
            Your prescription
          </h1>
          <div className="overflow-x-auto flex flex-row px-24 py-12">
            <div
              style={{ width: "240px" }}
              className="rounded-md drop-shadow-2xl mx-8 bg-purple-50 py-16  flex flex-col justify-center items-center"
            >
              <span className="mt-8 text-xl font-small w-90 text-justify">
                Problem
              </span>
              <span className="mt-8 text-xl font-small w-90 text-justify">
                Prescribed on
              </span>
              <span className="mt-8 text-xl font-small w-90 text-justify">
                Prescribed By
              </span>
            </div>
          </div>
        </div>
        <Dialog onClose={handleClose} open={open}>
          <div className="w-screen flex flex-col">
            <DialogTitle>QR Code</DialogTitle>
            <img src={src} className="w-48 ml-48"></img>
          </div>
        </Dialog>
      </div>
    );
  } else if (userInfo.role == "Doctor") {
    return (
      <div>
        <div className="bg-purple-100" style={{ height: "90vh" }}>
          <div className="flex flex-row justify-between items-center pt-4 px-12">
            <h1 className="font-head text-7xl">LifeClicks</h1>
            <div className="flex flex-row items-center">
              <Avatar
                sx={{ width: 90, height: 90 }}
                src={userInfo.profileURL}
              ></Avatar>
              <button
                class="x-6 m-12 drop-shadow-xl font-small rounded-md bg-gradient-to-r from-purple-400 to-purple-500 py-3 px-8 text-white"
                type="submit"
                onClick={() => {
                  localStorage.setItem("userInfo", "");
                  router.push("/");
                }}
              >
                <div className="flex flex-row items-center">
                  <span className="text-xl">Logout</span>
                </div>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 ">
            <h3
              className="pt-4 px-20 font-head text-9xl text-indigo-900 font-bold align-middle"
              style={{ paddingTop: "13vh" }}
            >
              Welcome back, {userInfo.Name}!
            </h3>
            <div className="flex justify-center">
              {" "}
              <img src="https://cdn3d.iconscout.com/3d/premium/thumb/medicine-3494848-2928740.png"></img>
            </div>
          </div>
        </div>
        <div className="w-screen px-20 flex flex-row relative bottom-20">
          <div className="w-1/6 flex justify-center items-center">
            <div
              className="py-4 drop-shadow-xl font-small rounded-md bg-gradient-to-r from-purple-400 to-purple-500 px-8"
              onClick={() => {
                QRCode.toDataURL(userInfo["_id"]).then((data) => {
                  setSrc(data);
                });
                setOpen(true);
              }}
            >
              <span className="text-white text-justify align-middle">
                Scan QR Code
              </span>
            </div>
          </div>
          <div className="p-8 w-full">
            <input
              className="w-full px-4 py-8 border placeholder:font-small placeholder:text-2xl text-2xl border-gray-300 rounded outline-none focus:ring-purple-500 focus:border-purple-500 focus:ring-1"
              placeholder="Search for patients"
            ></input>
          </div>
          <div className="w-1/6 flex justify-center items-center">
            <div className="p-8 drop-shadow-xl font-small rounded-full bg-gradient-to-r from-purple-400 to-purple-500  flex items-center justify-center">
              <MdSearch size={32} color="white" />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-5xl font-small text-black ml-24">Your doctors</h1>
          <div className="overflow-x-auto flex flex-row px-24 py-12">
            {doctorPatient.map((v) => {
              return (
                <div
                  style={{ width: "240px" }}
                  className="rounded-md drop-shadow-2xl mx-8 bg-purple-50 py-16  flex flex-col justify-center items-center"
                >
                  <Avatar
                    sx={{ width: 120, height: 120 }}
                    src={v.profileURL}
                  ></Avatar>
                  <span className="mt-8 text-xl font-small w-90 text-justify">
                    {v.Name}{" "}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h1 className="text-5xl font-small text-black ml-24">
            Your prescription
          </h1>
          <div className="overflow-x-auto flex flex-row px-24 py-12">
            <div
              style={{ width: "240px" }}
              className="rounded-md drop-shadow-2xl mx-8 bg-purple-50 py-16  flex flex-col justify-center items-center"
            >
              <span className="mt-8 text-xl font-small w-90 text-justify">
                Problem
              </span>
              <span className="mt-8 text-xl font-small w-90 text-justify">
                Prescribed on
              </span>
              <span className="mt-8 text-xl font-small w-90 text-justify">
                Prescribed By
              </span>
            </div>
          </div>
        </div>
        <Dialog onClose={handleClose} open={open}>
          <div className="w-screen flex flex-col">
            <DialogTitle>QR Code</DialogTitle>
            <QrReader
              delay={50000}
              style={{
                height: 240,
                width: 320,
              }}
              onError={(err) => {
                console.log(err);
              }}
              onScan={async (data) => {
                console.log("this is running");
                console.log(data);

                if (data != null && done == false) {
                  try {
                    setDone(true);
                    const response = await axios.post(
                      `${process.env.NEXT_PUBLIC_API}` + "addPatient",
                      { doctorID: userInfo["_id"], patientID: data.text }
                    );
                    router.push("/updateInfo/" + data.text);
                  } catch (e) {
                    console.log(e);
                  }
                }
              }}
            />
          </div>
        </Dialog>
      </div>
    );
  } else if (userInfo.role == "Pharma") {
    return <div></div>;
  } else {
    return <div></div>;
  }
}
