const React = require('react');
const classNames = require('classnames');

class Carousel extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            currentPosition: 0,
            itemsPerPage: 1,
        }

        this.returnDataSet = this.returnDataSet.bind(this);
        this.getCarouselControls = this.getCarouselControls.bind(this);

    }

    componentDidMount() {
        //
    }


    handlePreviousPageBtnClick() {
        if (this.state.currentPosition >= 2) {
            this.setState({
                currentPosition: this.state.currentPosition - 1,
            })
        }

    }

    handleNextPageBtnClick() {
        if (this.state.currentPosition < this.props.data.items.length-1) {
            this.setState({
                currentPosition: this.state.currentPosition + 1,
            })
        }
    }



    getCarouselControls(previousBtnDisabled, nextBtnDisabled) {

        if (previousBtnDisabled && nextBtnDisabled) {

            return (<div className="carousel-controls carousel-controls--inactive"></div>);

        }

        let previousBtnClassNames = classNames(
            'carousel-control', 'carousel-control--previous',
            {'carousel-control--disabled': previousBtnDisabled});

        let nextBtnClassNames = classNames(
            'carousel-control', 'carousel-control--next',
            {'carousel-control--disabled': nextBtnDisabled});

        return (
            <div className="carousel-controls">
                <button tabIndex={previousBtnDisabled ? -1 : 0} className={previousBtnClassNames}
                        onClick={this.handlePreviousPageBtnClick.bind(this, 'previous')}
                >
                    <span className="mediaBlock-icon icon--chevron-left" aria-hidden="true"></span>
                    &lt;
                </button>
                <button tabIndex={nextBtnDisabled ? -1 : 0} className={nextBtnClassNames}
                        onClick={this.handleNextPageBtnClick.bind(this, 'next')}

                >
                    <span className="mediaBlock-icon icon--chevron-right" aria-hidden="true"></span>
                    &gt;
                </button>
            </div>);

    }

    returnDataSet() {

        return this.props.data.items.map((item, index) => {

            let activity = ((this.state.currentPosition === index) && (index <= this.props.data.items.length)) ? 'in-transition' : 'not-on';

            return (
                <article key={index} className={activity}>
                    <img className="img-responsive2" src={item.img}/>
                </article>

            )
        })
    }


    render() {
        let carouselItems = this.returnDataSet();
        let itemCount = this.props.data.items.length;

        let previousBtnDisabled = this.state.currentPosition === 0;
        let nextBtnDisabled = itemCount <= this.state.itemsPerPage || this.state.currentPosition === itemCount - this.state.itemsPerPage;

        return (
            <div id="slider" className="carousel">

                <div ref="viewport" id="slides">

                    <div id="overflow">

                        <div className="inner">
                            {carouselItems}
                        </div>
                    </div>
                    {this.getCarouselControls(previousBtnDisabled, nextBtnDisabled)}
                </div>
            </div>
        )
    }

};

module.exports = Carousel;
