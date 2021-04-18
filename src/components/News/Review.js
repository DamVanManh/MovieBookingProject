import React, { Component } from 'react'

import fakeData from './fakeReviewData.json'

export default class Review extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: fakeData,
            visible: 8,
            // error: false
        };

        this.loadMore = this.loadMore.bind(this);
    }

    loadMore() {
        this.setState((prev) => {
            // console.log("vo day")
            return { visible: prev.visible + 8 };
        });
    }

    render() {
        return (
            <section className="feed">
                <div className="tiles" aria-live="polite">
                    <div className="row">

                        {this.state.items.slice(0, this.state.visible).map((item, index) => {
                            return (
                                <div className="col-sm-4">
                                    <div className="tile fade-in" key={item.id}>
                                        <img className="w-100" src={item.img} alt="" />
                                        <h2>{item.title}</h2>
                                        <p>{item.body}</p>
                                    </div>
                                </div>

                            );
                        })}
                    </div>

                </div>
                {this.state.visible < this.state.items.length &&
                    <button onClick={this.loadMore} type="button" className="btn btn-success load-more">Load more</button>
                }
            </section>
        );
    }
}