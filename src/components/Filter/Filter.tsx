import './style.css';

const Filter = () => {
  return (
    <div className="container">
    <div className='filter'>
        <div className="row">
            <div className="col">
                <h6 className="filter__title">
                    Lines
                </h6>
                <div className="filter__item">
                    <input type="checkbox" />
                    5-9
                </div>
            </div>
            <div className="col">
                <h6 className="filter__title">
                    Lines
                </h6>
                <div className="filter__item">
                    <input type="checkbox" />
                    5-9
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Filter;