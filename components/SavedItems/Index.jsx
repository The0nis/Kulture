import { useState } from 'react';
import style from './savedItems.module.css';
import Page from '../Page';
import data from './SavedLists';
import Image from 'next/image';
import deleteMe from '../../assets/deletebtn.png';

const SavedItems = () => {
  const [savedLists, setSavedLists] = useState(data); // create a state variable and set it to the `datas` array
  const [datas, setDatas] = useState(data); // create a state variable to store the original list of items
  const [currentPage, setCurrentPage] = useState(1); // state variable to store the current page number
  const [itemsPerPage] = useState(4); // state variable to store the number of items per page

  const removeItem = (index) => {
    // create a new array with only the items that you want to keep
    const updatedSavedLists = savedLists.filter((item, i) => i !== index);
    // update the savedLists state variable with the new array
    setSavedLists(updatedSavedLists);
    setDatas(updatedSavedLists); // update the datas array with the new array
  }

  // calculate the start and end index for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = savedLists.slice(indexOfFirstItem, indexOfLastItem);

  // calculate the total number of pages
  const totalPages = Math.ceil(savedLists.length / itemsPerPage);

  // function to handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Page>
      <div className={style.wrapper}>
        {currentItems.map((item, id) => {
          return (
            <main className={style.items_wrapper} key={id}>
              <div className={style.first_wrapper}>
                <div className={style.picture_wrapper}>
                  <Image src={item.picture} className={style.item_picture} />
                </div>
                <div className={style.items_container}>
                  <div className={style.item_content}>
                    <h5>
                      {item.name}
                      <span className={style.item_dot}>
                        <h6>.</h6>
                      </span>
                      <span className={style.item_lastseen}>
                        {' '}
                        <p>{item.lastseen}</p>
                      </span>
                    </h5>
                    <p>
                      by {item.producer}
                      <span className={style.change_color}>
                        {' '}
                        {item.profile}
                      </span>
                    </p>
                    <p>Released on {item.released}</p>
                  </div>

                  <div className={style.item_footer}>
                    <div className={style.item_amount}>
                      <h4>NGN {item.amount}</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.item_btn}>
                <div className={style.item_footersecond}>
                  <div className={style.item_amount}>
                    <h4>NGN {item.amount}</h4>
                  </div>
                </div>
                <div className={style.btn_wrap}>
                  <div className={style.first_btn}>
                    {/* write a function for the button that will remove only the specific items from the object */}
                    <button className={style.delete_btn} onClick={() => removeItem(id + indexOfFirstItem)}>
                      Remove{' '}
                      <Image src={deleteMe} className={style.delete_icon} />
                    </button>
                  </div>

                  <div className={style.second_btn}>
                    <button className={style.buy_btn}>Buy Now</button>
                  </div>
                </div>
              </div>
            </main>
          );
        })}
                {/* render pagination links */}
                <div className={style.pagination}>
          {/* only render the "prev" link if the current page is greater than 1 */}
          {currentPage > 1 && (
            <button onClick={() => paginate(currentPage - 1)}>prev</button>
          )}

          {/* render the page numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={page === currentPage ? style.active : ''}
              onClick={() => paginate(page)}
            >
              {page}
            </button>
          ))}

          {/* only render the "next" link if the current page is less than the total number of pages */}
          {currentPage < totalPages && (
            <button onClick={() => paginate(currentPage + 1)}>next</button>
          )}
        </div>

      </div>
    </Page>
  );
};
export default SavedItems;
