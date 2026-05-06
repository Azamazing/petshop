import { href } from "react-router-dom";
import { v4 as uuid } from "uuid";
import InstagramIcon from "../icons/InstagramIcon";
import WhatsappIcon from "../icons/WhatsappIcon";

const contacts = {
  phone: "+49 30 915-88492",
  address: "Wallstraẞe 9-13, 10179 Berlin, Deutschland",
  workingHours: "24 hours a day",
  socialItems: [
    {
      id: uuid(),
      href: "https://www.instagram.com",
      icon: <InstagramIcon />,
    },
    {
      id: uuid(),
      href: "https://www.whatsapp.com",
      icon: <WhatsappIcon />,
    },
  ],
};

export default contacts;
