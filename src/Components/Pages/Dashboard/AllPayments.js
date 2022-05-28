import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Hooks/Firebase";
import { FaEdit } from "react-icons/fa";
import { useQuery } from "react-query";
import axiosPrivet from "../../Api/axiosPrivet";
import Loading from "../../Loading/Loading";
import State from "./State";

const AllPayments = () => {
  const [user, loading] = useAuthState(auth);
  const {
    data: orders,
    refetch,
    isLoading,
  } = useQuery("my-payments", () => axiosPrivet.get(`/get-order/${user?.email}`));
  const { data: payments } = useQuery("all-payment", () => axiosPrivet.get("/all-payments"));

  if (loading || isLoading) {
    return <Loading />;
  }

  let isPaid;
  const handlePending = (id) => {
    const confirm = window.confirm();
    if (confirm) {
      let payments = {};
      const storePay = localStorage.getItem("Payment-list");
      if (storePay) {
        payments = JSON.parse(storePay);
      }
      payments[id] = "true";
      localStorage.setItem("Payment-list", JSON.stringify(payments));
    }
  };

  // const paymentArray = Object.keys(paymentList).map((key) => key == "pi_3L4CUBJukytloPq316Ewgjkl");
  /* const paymentArray = Object.keys(paymentList).map((key) => (
    <option value={key}>{paymentList[key]}</option>
  )); */
  // console.log(paymentArray);

  return (
    <>
      <div className="mb-5">
        <h1 className="text-3xl font-bold uppercase mb-3">
          Welcome to Dashboard {user?.displayName}
        </h1>
        <p className="text-center text-2xl ">{user?.email}</p>
      </div>
      <table className="border-collapse relative bg-[rgb(26,19,78)] table-fixed  w-5/6  ">
        <thead>
          <tr className="border text-left   border-[rgb(51,41,129)] ">
            <th colSpan={1} className="pl-5 py-3">
              #
            </th>
            <th colSpan={5}>Name</th>
            <th colSpan={3}>status</th>
            <th colSpan={3}>Transaction Id</th>
          </tr>
        </thead>
        <tbody>
          {payments &&
            payments?.data?.map((paymentUser, index) => {
              return (
                <>
                  <tr key={paymentUser._id} className="hover:bg-[rgb(42,31,114)]">
                    <td colSpan={1} className="pl-5 py-2 ">
                      {index + 1}
                    </td>
                    <td colSpan={5} className=" py-2 ">
                      {paymentUser?.email}
                    </td>
                    <td colSpan={3} className=" py-2 ">
                      <State id={paymentUser?.transactionId} handlePending={handlePending}></State>

                      {/* {isPaid === "true" && (
                        <button onClick={() => handlePending()} className="btn btn-sm">
                          pending
                        </button>
                      )}
                      {isPaid === "paid" && <span className="text-green-500">paid</span>} */}
                    </td>
                    <td colSpan={3} className=" py-2 ">
                      <span title={paymentUser?.transactionId}>
                        {paymentUser?.transactionId.slice(0, 20)}
                      </span>
                      ...
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default AllPayments;
