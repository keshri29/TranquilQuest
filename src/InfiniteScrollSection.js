// import React, { useState, useEffect } from 'react';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import styled from 'styled-components';

// const Item = styled.div`
//   padding: 1rem;
//   margin: 0.5rem 0;
//   border: 1px solid #ddd;
//   border-radius: 4px;
// `;

// const fetchMoreData = async (setData, data) => {
//   // Simulate an API call
//   const newData = Array.from({ length: 10 }, (_, index) => `Item ${data.length + index + 1}`);
//   setData([...data, ...newData]);
// };

// function InfiniteScrollSection() {
//   const [data, setData] = useState(Array.from({ length: 10 }, (_, index) => `Item ${index + 1}`));
//   const [hasMore, setHasMore] = useState(true);

//   useEffect(() => {
//     if (data.length >= 50) {
//       setHasMore(false); // Stop fetching if you reach 50 items
//     }
//   }, [data]);

//   return (
//     <InfiniteScroll
//       dataLength={data.length}
//       next={() => fetchMoreData(setData, data)}
//       hasMore={hasMore}
//       loader={<h4>Loading...</h4>}
//       endMessage={<p>No more items to show</p>}
//     >
//       {data.map((item, index) => (
//         <Item key={index}>{item}</Item>
//       ))}
//     </InfiniteScroll>
//   );
// }

// export default InfiniteScrollSection;
