import Axios from "axios";
import { RestUrls } from "./Urls";

export async function GetData(dataType, ...data) {
    return await Axios.get(RestUrls[dataType](...data));
}