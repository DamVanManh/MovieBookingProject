import React from 'react'

export default function UsersManagement() {
  return (
    <div>
      <h1>quản lý tài khoản người dùng</h1>
    </div>
  )
}

// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   makeStyles
// } from '@material-ui/core';
// import Page from 'src/components/Page';
// import Results from './Results';
// import Toolbar from './Toolbar';
// import data from './data';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: theme.palette.background.dark,
//     minHeight: '100%',
//     paddingBottom: theme.spacing(3),
//     paddingTop: theme.spacing(3)
//   }
// }));

// export default function UsersManagement() {
//   const classes = useStyles();
//   const [customers] = useState(data);

//   return (
//     <div>
//       <h1>quản lý tài khoản người dùng</h1>
//       <Page
//         className={classes.root}
//         title="Customers"
//       >
//         <Container maxWidth={false}>
//           <Toolbar />
//           <Box mt={3}>
//             <Results customers={customers} />
//           </Box>
//         </Container>
//       </Page>
//     </div>
//   )
// }

