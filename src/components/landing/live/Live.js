import NFTS from "./nfts/nfts";
import "./live.scss";
// import TotalSupply from "../../hooks/totalSupply";
// import CheckURI from "../../hooks/dataFetchers/getTokenUri";

const Live = ({supArr, objArr, setObjArr}) => {

  return (
    <>
      <section className="main-live ptb">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="text-center">Live Auctions</h2>
            </div>
          </div>

          <div className="row ptb20">
            {supArr.map((item, index) => {
              return (
                <div key={index} className="col-sm-3">
                  <NFTS supArr={supArr} setObjArr={setObjArr} objArr={objArr} item={item} />
                </div>
              );
            })}
          </div>
          <div className="row">
            <div className="col-sm-12 text-center">
              <button className="btn-common2">NO MORE TO SHOW</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Live;
