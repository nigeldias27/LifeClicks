import { useRouter } from "next/router";
import { Avatar, Dialog, DialogTitle } from "@mui/material";
import Expandible from "@/components/Expandible";
import { useEffect, useState } from "react";
import useDownloader from "react-use-downloader";
import axios from "axios";
import Link from "next/link";
import { async } from "@firebase/util";
export default function UpdateInfo() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();
  const { id } = router.query;
  const [data, setData] = useState({});
  const [script, setScript] = useState({});
  const [userData, setUserData] = useState({});
  const handleClose = (value) => {
    setOpen(false);
  };
  const changed = (props) => (e) => {
    var d = {};
    d[props] = e.target.value;
    setData({ ...data, ...d });
    console.log(data);
  };
  useEffect(() => {
    initstate();
  }, []);
  /*router.post("/loadSinglePatient", loadSinglePatient);
router.post("/updateMedicalInfo", updateMedicalInfo);
router.post("/LoadPatient", LoadPatient);
router.post("/addPrescription", addPrescription); */
  const initstate = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API}` + "loadSinglePatient",
      { id: id }
    );
    setUserData(response.data);
  };
  const cchanged = (props) => (e) => {
    var d = {};
    d[props] = e.target.value;
    setScript({ ...script, ...d });
    console.log(data);
  };
  return (
    <div className="w-screen">
      <div
        className="w-screen flex justify-center items-center bg-purple-50"
        style={{ height: "60vh" }}
      >
        <div className="grid grid-cols-2">
          <div className="flex justify-center items-center">
            <Avatar
              sx={{ width: 240, height: 240, marginRight: 36 }}
              src={`${userData == null ? "" : userData.profileURL}`}
            ></Avatar>
          </div>

          <div className="flex justify-center flex-col">
            <h3 className="font-head text-6xl">
              {userData == null ? "" : userData.Name}
            </h3>
            <h3 className="font-small text-3xl pt-8">
              I am {userData == null ? "" : userData.Age} years old
            </h3>
            <h3 className="font-small text-3xl pt-4">
              Chronic Diseases:
              {userData == null ? "" : userData.Chronic_Disease}
            </h3>
            <h3 className="font-small text-3xl pt-4">
              Allergies: {userData == null ? "" : userData.Allergies}
            </h3>
          </div>
        </div>
      </div>
      <Expandible name="Medical History">
        <div className="flex flex-col items-center">
          <button
            class="x-6 m-12 drop-shadow-xl font-small rounded-md bg-gradient-to-r from-purple-400 to-purple-500 py-3 px-8 text-white"
            type="submit"
            onClick={() => {
              setOpen(true);
            }}
          >
            <div className="flex flex-row items-center">
              <span className="text-xl">Add</span>
            </div>
          </button>
          {userData == null || userData.medicalInfo == undefined ? (
            <div></div>
          ) : (
            userData.medicalInfo.map((v) => {
              return (
                <div className="w-5/6 bg-purple-50 mt-8 rounded-md p-12  drop-shadow-lg">
                  <div className="flex flex-row justify-between pb-4">
                    <h3 className="font-small text-xl">{v.Title}</h3>
                    <span>{v.Date}</span>
                  </div>
                  <span className="font-small">{v.Description}</span>
                </div>
              );
            })
          )}
        </div>
      </Expandible>

      <Expandible name="Family History">
        {userData == null || userData.FamilyCaseHistory == undefined ? (
          <div></div>
        ) : (
          userData.FamilyCaseHistory.map((v) => {
            return (
              <div className="w-5/6 bg-purple-50 rounded-md p-12  drop-shadow-lg">
                <div className="flex flex-row justify-between pb-4">
                  <h3 className="font-small text-xl">{v.Title}</h3>
                  <span>{v.Date}</span>
                </div>
                <span className="font-small">{v.Description}</span>
              </div>
            );
          })
        )}
      </Expandible>
      <Expandible name="Reports">
        {userData == null || userData.reports == undefined ? (
          <div></div>
        ) : (
          userData.reports.map((v, i) => {
            return (
              <div className="flex flex-col items-center">
                <div className="w-5/6 bg-purple-50 rounded-md px-12 py-4  drop-shadow-lg">
                  <div className="flex flex-row justify-between items-center">
                    <h3 className="font-small text-xl">Report {i + 1}</h3>
                    <a target="_blank" href={`${v}`} rel="noopener noreferrer">
                      <button
                        class="x-6 m-12 drop-shadow-xl font-small rounded-md bg-gradient-to-r from-purple-400 to-purple-500 py-3 px-8 text-white"
                        type="submit"
                      >
                        <div className="flex flex-row items-center">
                          <span className="text-xl">Open</span>
                        </div>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </Expandible>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Add to Medical History</DialogTitle>
        <div className="pt-4 grid grid-cols-2">
          <div className="px-4">
            <input
              onChange={changed("Title")}
              placeholder="Title"
              className="w-full my-4 px-4 py-2 text-base border border-gray-300 rounded outline-none focus:ring-purple-500 focus:border-purple-500 focus:ring-1"
            ></input>
          </div>
          <div className="px-4">
            <input
              placeholder="Date"
              onChange={changed("Date")}
              type="date"
              className="w-full my-4 px-4 py-2 text-base border border-gray-300 rounded outline-none focus:ring-purple-500 focus:border-purple-500 focus:ring-1"
            ></input>
          </div>
        </div>
        <div className="px-4">
          <textarea
            placeholder="Description"
            onChange={changed("Description")}
            className="w-full my-4 px-4 py-2 text-base border border-gray-300 rounded outline-none focus:ring-purple-500 focus:border-purple-500 focus:ring-1"
          ></textarea>
        </div>
        <div className="px-4 py-4">
          <button
            class="x-6 drop-shadow-xl font-small rounded-md bg-gradient-to-r from-purple-400 to-purple-500 py-3 px-8 text-white"
            type="submit"
            onClick={async () => {
              const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API}` + "updateMedicalInfo",
                { id: id, data: data }
              );
            }}
          >
            <span className="text-xl">Add</span>
          </button>
        </div>
        <DialogTitle>Prescription</DialogTitle>
        <div className="pt-4 grid grid-cols-3">
          <div className="px-4">
            <input
              onChange={cchanged("Name_of_Medicine")}
              placeholder="Title"
              className="w-full my-4 px-4 py-2 text-base border border-gray-300 rounded outline-none focus:ring-purple-500 focus:border-purple-500 focus:ring-1"
            ></input>
          </div>
          <div className="px-4">
            <input
              onChange={cchanged("Quantity")}
              placeholder="Quantity"
              className="w-full my-4 px-4 py-2 text-base border border-gray-300 rounded outline-none focus:ring-purple-500 focus:border-purple-500 focus:ring-1"
            ></input>
          </div>
          <div className="px-4">
            <input
              placeholder="Date"
              onChange={cchanged("Date")}
              type="date"
              className="w-full my-4 px-4 py-2 text-base border border-gray-300 rounded outline-none focus:ring-purple-500 focus:border-purple-500 focus:ring-1"
            ></input>
          </div>
        </div>
        <div className="px-4">
          <textarea
            placeholder="Note"
            onChange={cchanged("Description")}
            className="w-full my-4 px-4 py-2 text-base border border-gray-300 rounded outline-none focus:ring-purple-500 focus:border-purple-500 focus:ring-1"
          ></textarea>
        </div>
        <div className="px-4 py-4">
          <button
            class="x-6 drop-shadow-xl font-small rounded-md bg-gradient-to-r from-purple-400 to-purple-500 py-3 px-8 text-white"
            type="submit"
            onClick={async () => {
              const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API}` + "addPrescription",
                {
                  id: id,
                  ...script,
                  Doctor: JSON.parse(localStorage.getItem("userInfo"))["_id"],
                  DoctorName: JSON.parse(localStorage.getItem("userInfo"))[
                    "Name"
                  ],
                }
              );
            }}
          >
            <span className="text-xl">Add</span>
          </button>
        </div>
      </Dialog>
    </div>
  );
}
