import type { LocationCategory } from "@/modules/models/LocationCategory";
import ApiClientBase from "../../apiClientBase/ApiClientBase";
import { LocationEndpointsClient } from "./LocationEndpointsClient";
import { LocationCategoryEndpointsClient } from "./LocationCategoryEndpointsClient";

export class AirBnbApiClient {
    private readonly client : ApiClientBase;
    public readonly baseUrl: string;

    constructor(){
        this.baseUrl = "https://localhost:7234/";


        this.client = new ApiClientBase({
            baseURL: this.baseUrl
        });

        this.location = new LocationEndpointsClient(this.client);
        this.locationCategory = new LocationCategoryEndpointsClient(this.client);
    }

    public location : LocationEndpointsClient;
    public locationCategory: LocationCategoryEndpointsClient;
}