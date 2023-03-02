import { ThreeDots } from "react-loader-spinner";
export default function Loader() {
  return (
    <ThreeDots
      height="120"
      width="120"
      radius="9"
      color="rgb(54, 215, 183)"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
}