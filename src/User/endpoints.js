SchoolModel

const router = express.Router();

router.post("/login", UserServices.loginUser);

router.post("/register", UserServices.registerUser);


export default router;
