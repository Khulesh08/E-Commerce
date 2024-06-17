import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { app } from "../../firebase/firebaseConfig";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { ShoppingCart, CircleUser, Heart } from "lucide-react";
import LoginPage from "../Login/page";
import { Dropdown, NotificationArgsProps, Space, notification } from "antd";

type NotificationPlacement = NotificationArgsProps["placement"];
interface HeaderProps {
  onCategoryChange?: (category: string) => void;
  onSearch?: (search: string) => void;
}

const Context = React.createContext({ name: "Default" });
const styles = {
  searchContainer: {
    marginTop: 0,
    width: "40%",
  },
  searchInput: {
    background: "white",
    color: "black",
    height: "10%",
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  categorySelect: {
    background: "transparent",
    width: "150px",
    color: "black",
    fontSize: "16px",
    cursor: "pointer",
    border: "1px solid #cccccc69",
    borderRadius: "5px",
    padding: "8px",
    marginRight: "10px",
  },
};

export const Header: React.FC<HeaderProps> = ({
  onCategoryChange,
  onSearch,
}) => {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [api, contextHolder] = notification.useNotification();
  const [showLogin, setShowLogin] = useState<boolean>(false); 

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    onCategoryChange!(event.target.value);
  };

  const openNotification = useCallback(
    (placement: NotificationPlacement) => {
      api.warning({
        message: `User Logged Out`,
        placement,
      });
    },
    [api]
  );

  const handleLogout = useCallback(() => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setLoggedIn(false);
        openNotification("bottomRight");
        router.push("./");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  }, [router, openNotification]);

  const toggleLoginPopup = useCallback(() => {
    setShowLogin((prevShowLogin) => !prevShowLogin);
  }, []);

  const handleOpenHome = useCallback(() => {
    router.push("/");
  }, [router]);

  const handleOpenCart = useCallback(() => {
    router.push("/Cart");
  }, [router]);

  const handleOpenWishlist = useCallback(() => {
    router.push("/Wishlist");
  }, [router]);

  const handleSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
      onSearch?.(event.target.value);
    },
    []
  );

  const preventScroll = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const contextValue = useMemo(() => ({ name: "Ant Design" }), []);

  return (
    <>
      <header>
        <Navbar bg="light" expand="lg" fixed="top">
          <Container>
            <Context.Provider value={contextValue}>
              {contextHolder}
              <Navbar
                className="navbar-brand"
                onClick={handleOpenHome}
                style={{
                  fontSize: 30,
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                  color: "black",
                  cursor: "pointer",
                }}
              >
                Shopping Cart
              </Navbar>
              <div style={styles.searchContainer}>
                <form onSubmit={preventScroll}>
                  <input
                    type="text"
                    value={search}
                    onChange={handleSearch}
                    placeholder="Search products..."
                    style={styles.searchInput}
                  />
                </form>
              </div>
              <Navbar.Toggle aria-controls="navbarSupportedContent" />
              <center>
                <Navbar.Collapse id="navbarSupportedContent">
                  &emsp;
                  <Nav className="white-button">
                    <select
                      onChange={handleCategoryChange}
                      style={styles.categorySelect}
                    >
                      <option value="All">All Products</option>
                      <option value="laptop">Laptop</option>
                      <option value="mobile">Mobile</option>
                      <option value="television">Television</option>
                    </select>
                    &emsp; &emsp;
                    <Nav
                      style={{ color: "black", cursor: "pointer" }}
                      onClick={handleOpenWishlist}
                    >
                      <Heart />
                    </Nav>
                    &emsp; &emsp;
                    <Nav
                      style={{ color: "black", cursor: "pointer" }}
                      onClick={handleOpenCart}
                    >
                      <ShoppingCart />
                    </Nav>
                    &emsp; &emsp;
                  </Nav>
                  {loggedIn ? (
                    <div
                      style={{
                        marginBottom: 8,
                        cursor: "pointer",
                      }}
                    >
                      <Dropdown
                        menu={{
                          items: [{ label: "Logout", key: "1" }],
                          onClick: (e: any) => {
                            if (e.key === "1") {
                              handleLogout();
                            }
                          },
                        }}
                        onOpenChange={(nextOpen: boolean) => setOpen(nextOpen)}
                        open={open}
                      >
                        <a onClick={(e) => e.preventDefault()}>
                          <Space>
                            <CircleUser />
                          </Space>
                        </a>
                      </Dropdown>
                    </div>
                  ) : (
                    <div
                      onClick={toggleLoginPopup}
                      style={{
                        marginBottom: 8,
                        cursor: "pointer",
                      }}
                    >
                      <CircleUser />
                    </div>
                  )}
                </Navbar.Collapse>
              </center>
            </Context.Provider>
          </Container>
        </Navbar>
      </header>
      {showLogin && <LoginPage onClose={() => setShowLogin(false)} />}
    </>
  );
};
