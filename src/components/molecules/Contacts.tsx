import React from "react";
import { MdEmail } from "react-icons/md";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { Links } from "../../ui/molecules";
import { IconLink } from "../atoms";

export function Contacts() {
  return (
    <Links>
      <IconLink to='mailto:bodiavaleur@gmail.com' icon={<MdEmail />} />
      <IconLink to='https://github.com/bodiavaleur' icon={<AiFillGithub />} />
      <IconLink to='https://t.me/bodiavaleur' icon={<FaTelegramPlane />} />
      <IconLink
        to='https://www.instagram.com/bodiavaleur/'
        icon={<AiFillInstagram />}
      />
    </Links>
  );
}
