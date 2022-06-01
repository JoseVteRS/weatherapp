import { useEffect, useState } from "react";
import style from "./main-layout.module.css";

const MainLayout = ({ children, ...props }) => {
    return (
        <main {...props} className={style.mainLayout}>
            <div>{children}</div>
        </main>
    );
};

export default MainLayout;
