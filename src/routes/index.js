import express from 'express';

import { indexPage, userPage, userRegPage } from '../controllers';
import { loginCachePage } from '../controllers';
import { employeePage } from '../controllers';
import { logoPage } from '../controllers';
import { nodummieUserPage } from '../controllers';
import { nodummieLoginPage } from '../controllers';
import { nodummieLogoPage } from '../controllers';
import { nodummieLocationPage } from '../controllers';
import { nodummieBusinessPage } from '../controllers';
import { locationPage } from '../controllers';
import { billingAddressPage } from '../controllers';
import { nodummieImpressumPage } from '../controllers';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/:email', userPage);
indexRouter.post('/users', userPage);
indexRouter.post('/users/reg', userRegPage);
indexRouter.post('/users/sessions', loginCachePage);
indexRouter.post('/users/location', locationPage);
indexRouter.post('/users/billingaddress', billingAddressPage);
indexRouter.post('/intern/users', employeePage);
indexRouter.post('/intern/search/user', nodummieUserPage);
indexRouter.post('/intern/business/logo', nodummieLogoPage);
indexRouter.post('/intern/search/userlogindata', nodummieLoginPage);
indexRouter.post('/intern/search/userlocation', nodummieLocationPage);
indexRouter.post('/business', nodummieBusinessPage);
indexRouter.post('/business/logos', logoPage);
indexRouter.post('/business/impressum', nodummieImpressumPage);

export default indexRouter;
