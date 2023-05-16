import React from 'react'
import { Categories, PizzaBlock, SortPopup } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
              {name: 'популярности', type: 'popular'},
              {name: 'цене', type: 'price'}, 
              {name: 'алфавиту', type: 'name'},
              ]

function Home() {
  const dispatch= useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  })
  
  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  })

  return (
    <div className="container">
          <div className="content__top">
            <Categories 
            activeCategory={category}
            onClickCategory={onSelectCategory}
            items={categoryNames} />
            <SortPopup activeSortType={sortBy} items={sortItems} onClickSortType={onSelectSortType} />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
          {items && items.map((obj) => (
            <PizzaBlock onClickAddPizza={(obj) => console.log(obj)} key={obj.id} {...obj}/>
          ))}
          </div>
        </div>
  )
}

export default Home;