// import { useState } from 'react'
import "./App.css";
import Card from "./components/Card";

function App() {
  const imageData = [
    {
      image:
        "https://media.istockphoto.com/id/1759288181/photo/stethoscope-senior-and-woman-doctor-smile-with-healthcare-medical-work-and-hospital-job.jpg?s=612x612&w=0&k=20&c=ZdQ940cIXn4w7GfdScovecwgZanPBX6BWQNbkofTKRE=",
      title: "General Physician",
      name: "Dr.Prem Verma",
    },
    {
      image:
        "https://media.istockphoto.com/id/1759288181/photo/stethoscope-senior-and-woman-doctor-smile-with-healthcare-medical-work-and-hospital-job.jpg?s=612x612&w=0&k=20&c=ZdQ940cIXn4w7GfdScovecwgZanPBX6BWQNbkofTKRE=",
      title: "General Physician",
      name: "Dr.Prem Verma",
    },
    {
      image:
        "https://media.istockphoto.com/id/1759288181/photo/stethoscope-senior-and-woman-doctor-smile-with-healthcare-medical-work-and-hospital-job.jpg?s=612x612&w=0&k=20&c=ZdQ940cIXn4w7GfdScovecwgZanPBX6BWQNbkofTKRE=",
      title: "General Physician",
      name: "Dr.Prem Verma",
    },
    {
      image:
        "https://media.istockphoto.com/id/1759288181/photo/stethoscope-senior-and-woman-doctor-smile-with-healthcare-medical-work-and-hospital-job.jpg?s=612x612&w=0&k=20&c=ZdQ940cIXn4w7GfdScovecwgZanPBX6BWQNbkofTKRE=",
      title: "General Physician",
      name: "Dr.Prem Verma",
    },
    {
      image:
        "https://media.istockphoto.com/id/1759288181/photo/stethoscope-senior-and-woman-doctor-smile-with-healthcare-medical-work-and-hospital-job.jpg?s=612x612&w=0&k=20&c=ZdQ940cIXn4w7GfdScovecwgZanPBX6BWQNbkofTKRE=",
      title: "General Physician",
      name: "Dr.Prem Verma",
    },
    {
      image:
        "https://media.istockphoto.com/id/1759288181/photo/stethoscope-senior-and-woman-doctor-smile-with-healthcare-medical-work-and-hospital-job.jpg?s=612x612&w=0&k=20&c=ZdQ940cIXn4w7GfdScovecwgZanPBX6BWQNbkofTKRE=",
      title: "General Physician",
      name: "Dr.Prem Verma",
    },
    {
      image:
        "https://media.istockphoto.com/id/1759288181/photo/stethoscope-senior-and-woman-doctor-smile-with-healthcare-medical-work-and-hospital-job.jpg?s=612x612&w=0&k=20&c=ZdQ940cIXn4w7GfdScovecwgZanPBX6BWQNbkofTKRE=",
      title: "General Physician",
      name: "Dr.Prem Verma",
    },
    {
      image:
        "https://media.istockphoto.com/id/1759288181/photo/stethoscope-senior-and-woman-doctor-smile-with-healthcare-medical-work-and-hospital-job.jpg?s=612x612&w=0&k=20&c=ZdQ940cIXn4w7GfdScovecwgZanPBX6BWQNbkofTKRE=",
      title: "General Physician",
      name: "Dr.Prem Verma",
    },
    {
      image:
        "https://media.istockphoto.com/id/1759288181/photo/stethoscope-senior-and-woman-doctor-smile-with-healthcare-medical-work-and-hospital-job.jpg?s=612x612&w=0&k=20&c=ZdQ940cIXn4w7GfdScovecwgZanPBX6BWQNbkofTKRE=",
      title: "General Physician",
      name: "Dr.Prem Verma",
    },
    {
      image:
        "https://media.istockphoto.com/id/1759288181/photo/stethoscope-senior-and-woman-doctor-smile-with-healthcare-medical-work-and-hospital-job.jpg?s=612x612&w=0&k=20&c=ZdQ940cIXn4w7GfdScovecwgZanPBX6BWQNbkofTKRE=",
      title: "General Physician",
      name: "Dr.Prem Verma",
    },
    {
      image:
        "https://media.istockphoto.com/id/1759288181/photo/stethoscope-senior-and-woman-doctor-smile-with-healthcare-medical-work-and-hospital-job.jpg?s=612x612&w=0&k=20&c=ZdQ940cIXn4w7GfdScovecwgZanPBX6BWQNbkofTKRE=",
      title: "General Physician",
      name: "Dr.Prem Verma",
    },
    {
      image:
        "https://media.istockphoto.com/id/1759288181/photo/stethoscope-senior-and-woman-doctor-smile-with-healthcare-medical-work-and-hospital-job.jpg?s=612x612&w=0&k=20&c=ZdQ940cIXn4w7GfdScovecwgZanPBX6BWQNbkofTKRE=",
      title: "General Physician",
      name: "Dr.Prem Verma",
    },
    {
      image:
        "https://media.istockphoto.com/id/1759288181/photo/stethoscope-senior-and-woman-doctor-smile-with-healthcare-medical-work-and-hospital-job.jpg?s=612x612&w=0&k=20&c=ZdQ940cIXn4w7GfdScovecwgZanPBX6BWQNbkofTKRE=",
      title: "General Physician",
      name: "Dr.Prem Verma",
    },
    {
      image:
        "https://media.istockphoto.com/id/1759288181/photo/stethoscope-senior-and-woman-doctor-smile-with-healthcare-medical-work-and-hospital-job.jpg?s=612x612&w=0&k=20&c=ZdQ940cIXn4w7GfdScovecwgZanPBX6BWQNbkofTKRE=",
      title: "General Physician",
      name: "Dr.Prem Verma",
    },
    {
      image:
        "https://media.istockphoto.com/id/1759288181/photo/stethoscope-senior-and-woman-doctor-smile-with-healthcare-medical-work-and-hospital-job.jpg?s=612x612&w=0&k=20&c=ZdQ940cIXn4w7GfdScovecwgZanPBX6BWQNbkofTKRE=",
      title: "General Physician",
      name: "Dr.Prem Verma",
    },
    {
      image:
        "https://media.istockphoto.com/id/1759288181/photo/stethoscope-senior-and-woman-doctor-smile-with-healthcare-medical-work-and-hospital-job.jpg?s=612x612&w=0&k=20&c=ZdQ940cIXn4w7GfdScovecwgZanPBX6BWQNbkofTKRE=",
      title: "General Physician",
     name: "Dr.Prem Verma",
    },
    {
      image:
        "https://media.istockphoto.com/id/1759288181/photo/stethoscope-senior-and-woman-doctor-smile-with-healthcare-medical-work-and-hospital-job.jpg?s=612x612&w=0&k=20&c=ZdQ940cIXn4w7GfdScovecwgZanPBX6BWQNbkofTKRE=",
      title: "General Physician",
      name: "Dr.Prem Verma",
    },
    {
      image:
        "https://media.istockphoto.com/id/1759288181/photo/stethoscope-senior-and-woman-doctor-smile-with-healthcare-medical-work-and-hospital-job.jpg?s=612x612&w=0&k=20&c=ZdQ940cIXn4w7GfdScovecwgZanPBX6BWQNbkofTKRE=",
      title: "General Physician",
      name: "Dr.Prem Verma",
    },
    {
      image:
        "https://media.istockphoto.com/id/1759288181/photo/stethoscope-senior-and-woman-doctor-smile-with-healthcare-medical-work-and-hospital-job.jpg?s=612x612&w=0&k=20&c=ZdQ940cIXn4w7GfdScovecwgZanPBX6BWQNbkofTKRE=",
      title: "General Physician",
      name: "Dr.Prem Verma",
    },
    {
      image:
        "https://media.istockphoto.com/id/1759288181/photo/stethoscope-senior-and-woman-doctor-smile-with-healthcare-medical-work-and-hospital-job.jpg?s=612x612&w=0&k=20&c=ZdQ940cIXn4w7GfdScovecwgZanPBX6BWQNbkofTKRE=",
      title: "General Physician",
      name: "Dr.Prem Verma",
    },
    {
      image:
        "https://media.istockphoto.com/id/1759288181/photo/stethoscope-senior-and-woman-doctor-smile-with-healthcare-medical-work-and-hospital-job.jpg?s=612x612&w=0&k=20&c=ZdQ940cIXn4w7GfdScovecwgZanPBX6BWQNbkofTKRE=",
      title: "General Physician",
      name: "Dr.Prem Verma",
    },
    {
      image:
        "https://media.istockphoto.com/id/1759288181/photo/stethoscope-senior-and-woman-doctor-smile-with-healthcare-medical-work-and-hospital-job.jpg?s=612x612&w=0&k=20&c=ZdQ940cIXn4w7GfdScovecwgZanPBX6BWQNbkofTKRE=",
      title: "General Physician",
      name: "Dr.Prem Verma",
    },
    {
      image:
        "https://media.istockphoto.com/id/1759288181/photo/stethoscope-senior-and-woman-doctor-smile-with-healthcare-medical-work-and-hospital-job.jpg?s=612x612&w=0&k=20&c=ZdQ940cIXn4w7GfdScovecwgZanPBX6BWQNbkofTKRE=",
      title: "General Physician",
      name: "Dr.Prem Verma",
    },
    {
      image:
        "https://media.istockphoto.com/id/1759288181/photo/stethoscope-senior-and-woman-doctor-smile-with-healthcare-medical-work-and-hospital-job.jpg?s=612x612&w=0&k=20&c=ZdQ940cIXn4w7GfdScovecwgZanPBX6BWQNbkofTKRE=",
      title: "General Physician",
      name: "Dr.Prem Verma",
    },
    {
      image:
        "https://media.istockphoto.com/id/1759288181/photo/stethoscope-senior-and-woman-doctor-smile-with-healthcare-medical-work-and-hospital-job.jpg?s=612x612&w=0&k=20&c=ZdQ940cIXn4w7GfdScovecwgZanPBX6BWQNbkofTKRE=",
      title: "General Physician",
      name: "Dr.Prem Verma",
    },

    // ... Add 24 more image objects ...
  ];
  return (
    <>
      <div className="m-10">
        <h1 className="text-3xl font-bold text-center">Select Doctor</h1>
        <div className="flex flex-wrap gap-6 gap-y-10 m-10 justify-center">
          {imageData.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
