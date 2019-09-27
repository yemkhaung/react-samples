import React, { Component } from "react";
import { PaginationButtons } from "./PaginationButtons";

export class PaginationControls extends Component {
    constructor(props) {
        super(props);
        this.pageSizes = this.props.sizes || [5, 10, 15, 20];
        this.sortKeys = this.props.keys || ["Name", "Price"];
    }

    handlePageSizeChange = e => {
        this.props.setPageSize(e.target.value);
    };

    handleSortKeyChange = e => {
        this.props.setSortProperty(e.target.value);
    };

    render = () => (
        <div className="m-2">
            <div className="text-center m-1">
                <PaginationButtons
                    currentPage={this.props.currentPage}
                    pageCount={this.props.pageCount}
                    navigate={this.props.navigateToPage}
                />
            </div>
            <div className="font-inline justify-content-center">
                <select
                    className="form-control"
                    onChange={this.handlePageSizeChange}
                    value={this.props.pageSize || this.pageSizes[0]}
                >
                    {this.pageSizes.map(s => (
                        <option key={s} value={s}>
                            {s} per page
                        </option>
                    ))}
                </select>
                <select
                    className="form-control"
                    onChange={this.handleSortKeyChange}
                    value={this.props.sortKey || this.sortKeys[0]}
                >
                    {this.sortKeys.map(k => (
                        <option key={k} value={k.toLowerCase()}>
                            Sort By {k}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
