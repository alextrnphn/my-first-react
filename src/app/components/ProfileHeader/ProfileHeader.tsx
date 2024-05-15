import { useState, useEffect } from "react";

interface BioDataTypeObject {
  profile_image_url: string;
  name: string;
  bio: string;
}

export default function ProfileHeader() {
  //display data with useState
  const [bioData, setBioData] = useState<BioDataTypeObject[]>();

  //fetch data useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: Response = await fetch(
          "https://jan24-jilhslxp5q-uc.a.run.app/api/user"
        );
        if (!response.ok) {
          throw new Error("Network response not ok!");
        }
        const responseJSON = await response.json();
        console.log(responseJSON);
        setBioData(responseJSON);
      } catch (error: any) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return <>{bioData ? <p>bioData[0].bio</p> : <p>no data</p>}</>;
}
