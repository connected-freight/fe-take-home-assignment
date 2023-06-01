import React, { useState, useEffect } from "react";
import type { RateT } from "data/rates";
import { ratesData } from "data/rates";

const fetchRatesData = (): Promise<RateT[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(ratesData);
    }, 0);
  });

const MainQuestionPage = () => {
  const [rates, setRates] = useState<RateT[]>([]);

  useEffect(() => {
    fetchRatesData()
      .then((res) => setRates(res))
      .catch((reason) => {
        console.error(reason);
        setRates([]);
      });
  }, []);

  return (
    <div>
      <h1>Currency Converter</h1>
      <ul>
        {rates.map((rate: RateT) => {
          return (
            <li>
              {rate.currency} = {rate.rate}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MainQuestionPage;
