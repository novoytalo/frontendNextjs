import DataChart from "./components/DataCharComponents/DataChart";
import Layout from "./components/Sidebar";
export default function Home() {

    return (
        <div className="px-0 py-0 my-0 text-center flex-grow-1">
            
            <Layout />
            
         
            <DataChart/>
            
        </div>
    )
}