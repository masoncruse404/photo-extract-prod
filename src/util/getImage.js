//POST IMAGES
import MachineLearning from "../images/machine-learning.jpg"
import ComputerSecurity from "../images/computer-security.jpg"
import ArtificialIntelligence from "../images/artificial-intelligence.jpg"
import WorldInDrop from "../images/world-in-drop.jpg"
import YellowSmoke from "../images/yellow-smoke.jpg"
import Summer from "../images/summer.jpg"
import Help from "../images/hike.jpg"
import Lock from "../images/lock.jpg"
import NetworkMan from "../images/network-man.jpg"
import City from "../images/city.jpg"
import Network from "../images/network.jpg"
import Solder from "../images/solder.jpg"
import Work from "../images/work.jpg"
import Nurse from "../images/nurse.jpg"


const images = {
    "MachineLearning":{MachineLearning},
    "ArtificialIntelligence":{ArtificialIntelligence},
    "ComputerSecurity":{ComputerSecurity},
    "WorldInDrop":{WorldInDrop},
    "YellowSmoke":{YellowSmoke},
    "Summer":{Summer},
    "Help":{Help},
    "Lock":{Lock},
    "NetworkMan":{NetworkMan},
    "City":{City},
    "Solder":{Solder},
    "Work":{Work},
    "Network":{Network},
    "Nurse":{Nurse},
    "Default":{ComputerSecurity}
  }
  console.log('BLOGPOSTComponent | images', images)

  function getImage(var_image){
    if(var_image){
       let image_obj = images[var_image]
       return image_obj[var_image]
    }else{
      let image_obj = images["Default"]
      return image_obj["ComputerSecurity"]
    }
  }
export default getImage;