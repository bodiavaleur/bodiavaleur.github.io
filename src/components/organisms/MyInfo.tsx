import React from "react";
import { Avatar, Name } from "../../ui/atoms";
import { AboutMe, Location } from "../../ui/atoms/";
import { GoLocation } from "react-icons/go";
import { Contacts } from "../molecules";
import { MyInfoSection } from "../../ui/organisms";
import { BsChevronDown } from "react-icons/bs";
import { BottomNavigation } from "../../ui/molecules";

export function MyInfo() {
  return (
    <MyInfoSection>
      <Avatar
        src="https://i.pinimg.com/originals/af/dd/19/afdd1982c94a12698afa9239bef81029.jpg"
        alt="avatar"
      />
      <Name>Bodia Valeur</Name>
      <AboutMe>22 y.o front-end developer</AboutMe>
      <Location>
        <GoLocation />
        Kiev, Ukraine
      </Location>
      <Contacts />

      <BottomNavigation>
        scroll down
        <BsChevronDown />
      </BottomNavigation>
    </MyInfoSection>
  );
}
