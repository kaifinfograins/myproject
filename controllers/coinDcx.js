const coinCodex = async (req, res) => {
  try {
    const response = await axios.get(
      "https://coincodex.com/apps/coincodex/cache/all_coins.json",
      { maxBodyLength: Infinity, headers: {} }
    );
console.log("CHECK DATA");
    const newData = response.data;
    const getData = await getCoinCodex(newData);
  
    return res.status(200).json({
      message: "ok",
      data: getData,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "something went wrong",
    });
  }
};

async function getCoinCodex(newData) {
  const resultData = [];
  var list = ["BNB", "PBMC", "BTC", "ETH", "USDT"];
  for (let i = 0; i < newData.length; i++) {
    if (list.includes(newData[i].symbol)) {
      resultData.push(newData[i]);
    }
  }

  return resultData;
}

module.exports = { coinCodex };
