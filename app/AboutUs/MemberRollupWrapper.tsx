// "use client"
// import React, { useEffect, useState } from 'react';
// import Member from './Member'; // Member.tsxのパスに合わせてください
// import styles from './MemberRollupWrapper.module.css';

// type Props = {
//   name: string;
//   role?: string;
//   image?: string;
//   description?: string;
// };

// const MemberRollupWrapper: React.FC<Props> = (props) => {
//   const [rolledDown, setRolledDown] = useState(false);

//   useEffect(() => {
//     // 10秒後にロールダウン（表示開始）
//     const timer = setTimeout(() => {
//       setRolledDown(true);
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   // 最初は非表示、10秒後にロールダウンで表示
//   return (
//     <div className={`${styles.rollup} ${rolledDown ? styles.rollupActive : ''}`}>
//       {rolledDown && <Member {...props} />}
//     </div>
//   );
// };

// export default MemberRollupWrapper;