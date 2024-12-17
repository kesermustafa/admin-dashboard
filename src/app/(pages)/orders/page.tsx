import OrdersTable from "@/app/components/table/OrdersTable";
import {Order} from "@/app/types";
import {getOrders} from "@/app/utils/api";

const Page = async () => {
	const orders: Order[] = await getOrders ();
	
	return (
		<div className={'p-4'}>
			<h1 className="title">Siparişler</h1>
			
			<OrdersTable orders={orders}/>
		</div>
	);
};

export default Page;