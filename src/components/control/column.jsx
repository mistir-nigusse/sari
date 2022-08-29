import ColumnItem from "./column_item";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { categorySlice } from "../../slices/category";

const Column = () => {
  const xs = useMediaQuery({ query: "(max-width: 576px" });
  const sm = useMediaQuery({ query: "(max-width: 768px)" });
  const md = useMediaQuery({ query: "(max-width: 1150px)" });
  const lg = useMediaQuery({ query: "(min-width: 992px)" });
  const xl = useMediaQuery({ query: "(min-width: 1200px)" });

  const activeColumn = useSelector((state) => state.category.activeColumn);
  const actions = categorySlice.actions;
  const dispatch = useDispatch();
  if (xs) {
    if (activeColumn > 2 || activeColumn === 0) {
      dispatch(actions.setActiveColumn(2));
    }
  }
  else if (sm) {
    if (activeColumn <2 || activeColumn >3) {
        dispatch(actions.setActiveColumn(3));
      }
  }
  else if (md) {
    if (activeColumn <2 || activeColumn >4) {
        dispatch(actions.setActiveColumn(4));
      }
  }
 else {
    if (activeColumn <3) {
      dispatch(actions.setActiveColumn(4));
    }
  }

  return (
    <div className="column">
      {xs ? (
        <>
          {" "}
          <ColumnItem size={1} active={activeColumn === 1 ? true : false}  />
          <ColumnItem size={2} active={activeColumn === 2 ? true : false} />
        </>
      ) : sm ?  <>
      <ColumnItem size={2} active={activeColumn === 2 ? true : false} />
      <ColumnItem size={3} active={activeColumn === 3 ? true : false} />
      
    </> :
      
      md ? (
        <>
          <ColumnItem size={2} active={activeColumn === 2 ? true : false} />
          <ColumnItem size={3} active={activeColumn === 3 ? true : false} />
          <ColumnItem size={4} active={activeColumn === 4 ? true : false} />
        </>
      ) : (
        <>
         
          <ColumnItem size={3} active={activeColumn === 3 ? true : false} />
          <ColumnItem size={4} active={activeColumn === 4 ? true : false} />
          {/* <ColumnItem size={5} active={activeColumn === 5 ? true : false} onClick={()=>{console.log('clickedddddd')}} /> */}
          <ColumnItem
            size={6}
            active={activeColumn === 6 ? true : false}
          />{" "}
        </>
      )}
    </div>
  );
};

export default Column;
