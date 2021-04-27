import CMS from "netlify-cms-app";
import Home from "./preview/home";
import About from "./preview/about";
import Skills from "./preview/skills";
import Contact from "./preview/contact";

CMS.registerPreviewTemplate('home', Home);
CMS.registerPreviewTemplate('about', About);
CMS.registerPreviewTemplate('skills', Skills);
CMS.registerPreviewTemplate('contact', Contact);
