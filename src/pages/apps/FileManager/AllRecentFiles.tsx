import React from 'react';
import { Dropdown, Table } from 'react-bootstrap';

// dummy data
import { RecentFileTypes } from './data';

interface AllRecentFilesProps {
    recentFiles: RecentFileTypes[];
}

const AllRecentFiles = ({ recentFiles }: AllRecentFilesProps) => {
    return (
        <Table responsive className="table-nowrap table-centered mb-0">
            <thead>
                <tr>
                    <th className="border-0">File Name</th>
                    <th className="border-0">Folder Name</th>
                    <th className="border-0">File Size</th>
                    <th className="border-0">Last viewed</th>
                    <th className="border-0">Action</th>
                </tr>
            </thead>
            <tbody>
                {(recentFiles || []).map((file, index) => {
                    return (
                        <tr key={index}>
                            <td>{file.name}</td>
                            <td>{file.folderName}</td>
                            <td>{file.fileSize}</td>
                            <td>{file.lastviewed}</td>
                            <td>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        as="a"
                                        className="cursor-pointer table-action-btn btn btn-light btn-xs">
                                        <i className="uil uil-ellipsis-h"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu align="end">
                                        <Dropdown.Item>
                                            <i className="uil uil-share-alt me-2 text-muted vertical-middle"></i>
                                            Share
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <i className="uil uil-link-h me-2 text-muted vertical-middle"></i>
                                            Get Sharable Link
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <i className="uil uil-pen me-2 text-muted vertical-middle"></i>
                                            Rename
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <i className="uil uil-arrow-to-bottom me-2 text-muted vertical-middle"></i>
                                            Download
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <i className="uil uil-trash-alt me-2 text-muted vertical-middle"></i>
                                            Remove
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};

export default AllRecentFiles;
