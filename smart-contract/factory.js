import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x7791067F27d8e8AfC58f6dF9c079600E6Ea3FAB7"
);

export default instance;
