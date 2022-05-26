import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Hooks/Firebase";
import { FaEdit } from "react-icons/fa";
import { useQuery } from "react-query";
import axiosPrivet from "../../Api/axiosPrivet";

const AllPayments = () => {
  const [user] = useAuthState(auth);
  const products = " ";

  const { data: payments } = useQuery("all-payment", () => axiosPrivet.get("/all-payments"));

  console.log(payments);
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
            <th colSpan={3}>Name</th>
            <th colSpan={5}>Email</th>
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
                    <td colSpan={3} className=" py-2 ">
                      {paymentUser?.name}
                    </td>
                    <td colSpan={5} className=" py-2 ">
                      {paymentUser?.email}
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
