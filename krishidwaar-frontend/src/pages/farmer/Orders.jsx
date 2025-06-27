import React, { useEffect, useState } from 'react';
import API from '../../api/axios';
import moment from 'moment';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const res = await API.get('/orders/farmer');
      setOrders(res.data.orders);
    } catch (err) {
      console.error("Error fetching orders:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  const markAsDelivered = async (id) => {
    try {
      await API.put(`/orders/${id}/status`, { status: 'delivered' });
      fetchOrders(); // Refresh
    } catch (err) {
      console.error("Error updating status:", err.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-green-700 text-center">Orders</h1>

        {loading ? (
          <p className="text-gray-600 text-center">Loading orders...</p>
        ) : orders.length === 0 ? (
          <p className="text-gray-600 text-center">No orders found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow rounded">
              <thead className="bg-green-700 text-white">
                <tr>
                  <th className="py-2 px-4 text-left">Buyer</th>
                  <th className="py-2 px-4 text-left">Product</th>
                  <th className="py-2 px-4 text-left">Qty (kg)</th>
                  <th className="py-2 px-4 text-left">Total (₹)</th>
                  <th className="py-2 px-4 text-left">Date</th>
                  <th className="py-2 px-4 text-left">Status</th>
                  <th className="py-2 px-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">{order.buyer?.name}</td>
                    <td className="py-2 px-4">{order.product?.cropName}</td>
                    <td className="py-2 px-4">{order.quantity}</td>
                    <td className="py-2 px-4">₹{order.totalAmount}</td>
                    <td className="py-2 px-4">{moment(order.createdAt).format('YYYY-MM-DD')}</td>
                    <td className={`py-2 px-4 font-medium ${order.status === 'delivered' ? 'text-green-600' : 'text-yellow-600'}`}>
                      {order.status}
                    </td>
                    <td className="py-2 px-4 text-center">
                      {order.status === 'pending' ? (
                        <button
                          onClick={() => markAsDelivered(order._id)}
                          className="text-sm bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                        >
                          Mark as Delivered
                        </button>
                      ) : (
                        <span className="text-sm text-gray-500">Done</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
