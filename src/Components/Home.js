import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productsActions";
import MetaData from "./Layouts/MetaData";
import Loader from "./Layouts/Loader";
import Product from "./Product/Product";
import { toast } from "react-toastify";
import Pagination from "react-js-pagination";

export default function Home() {
  const dispatch = useDispatch();

  const { products, loading, error ,productCount , resPerPage } = useSelector((state) => state.productsState );
  const {currentPage , setCurrentPage} = useState(1)

  const setCurrentPageNo = (pageNo) =>{
    setCurrentPage(pageNo)
  }
  useEffect(() => {
    if (error) {
      return toast.error(error, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
    dispatch(getProducts);
  }, [error, dispatch]);

  return (
    <Fragment>
      {/* true ah erunthuchuna loader ahgum ilana fragment kulla varum */}
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Buy Best Products"} />
          <h1 id="products_heading">Latest Products</h1>
          <section id="products" className="container mt-5">
            <div className="row">
              {products &&
                products.map((product) => (
                  <Product key={product._id} product={product}/>
                ))}
            </div>
          </section>
          <div className="d-flex justify-content-center mt-5">
            <Pagination
              activePage={currentPage} 
              onChange={setCurrentPageNo}
              totalItemsCount={productCount}
              itemsCountPerPage={resPerPage}
              // nextPageText={"Next"}
              // firstPageText={"First"}
              // lastPageText={"Last"}
              // itemClass={"page-item"}
              // linkClass={"page-link"}
            />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}
