import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Bugs from "../components/Bugs";
import { getDateMinusDay } from "../utils/date";
import { useDispatch, useSelector } from "react-redux";
import { fetchBugs } from "../utils/api";
import { setBugs } from "../store/redux/bugs";
import Loader from "../components/Loader";
import Error from "../components/Error";

const RecentBugs = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const bugs = useSelector((state) => state.bugs.bugs);
  const authenticationToken = useSelector((state) => state.token.token);
  const dispatch = useDispatch();

  useEffect(() => {
    const getBugs = async () => {
      setIsFetching(true);
      try {
        const result = await fetchBugs(authenticationToken);
        dispatch(setBugs(result));
      } catch (error) {
        setError("Could not fetch bugs!");
      }

      setIsFetching(false);
    };

    getBugs();
  }, []);

  if (isFetching) {
    return <Loader />;
  }

  if (error && !isFetching) {
    return <Error message={error} />;
  }

  const getRecentBugs = bugs.filter((bug) => {
    const today = new Date();
    const dateSevenDaysAgo = getDateMinusDay(today, 7);

    return bug.date > dateSevenDaysAgo;
  });

  return (
    <Bugs
      bugs={getRecentBugs}
      period="Last 7 days"
      infoText="No bugs found for last 7 days"
    />
  );
};

export default RecentBugs;

const styles = StyleSheet.create({});
