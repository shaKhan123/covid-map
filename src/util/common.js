import Moment from "moment";

export const formatNumber = (num) => {
  return num != null
    ? num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    : num;
};

export const formatDate = (date) => {
  const timestamp = Date(date);
  return Moment(timestamp).format("lll");
  // Outputs as "Feb 17, 2017 1:30 PM"
};
