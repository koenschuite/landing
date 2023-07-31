import { FC } from "react";
import DataFeatures from "./data-features";
import Heros from "./hero";

interface DataPageProps {
    
}
 
const DataPage: FC<DataPageProps> = () => {
    return (
        <main className="min-h-screen mb-48">
            <Heros />
            <DataFeatures />
        </main>
    );
}
 
export default DataPage;