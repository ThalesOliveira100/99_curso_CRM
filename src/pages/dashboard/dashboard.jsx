import Menu from "../../components/menu/menu.jsx";
import Busca from "../../components/busca/busca.jsx";

function Dashboard() {
    return <>
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
                    <Menu/>
                </div>

                <div className="col py-3 me-3">
                    <Busca/>
                    <h1>Dashboard...</h1>
                </div>
            </div>
        </div>
    
    </>
};

export default Dashboard;