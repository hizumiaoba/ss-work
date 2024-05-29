import React from "react";
import {WorkInfo} from "../interface/WorkInfo";
import "./Card.css";

export const Card = () => {

  const thStyle = {
    margin: "auto",
    padding: "10px",
    backgroundColor: "lightgray",
    color: "#333",
  }

  const fetchWork = async () => {
    const response = await fetch("https://script.google.com/macros/s/AKfycbzF5mes7t6v65e-HxmCwFd_cbqcKV3ZgcMpuazKIGDuiAAlMH6SPROdNaRZyfm1gdEDjQ/exec");
    return (await response.json()) as Array<WorkInfo>;
  };

  const [works, setWorks] = React.useState<Array<WorkInfo>>([]);
  React.useEffect(() => {
    fetchWork().then((works) => {
      setWorks(works);
    });
  }, []);

  const components: Array<JSX.Element> = works.map((work: WorkInfo, i: number) => {
    const tdStyle = {
      margin: "auto",
      padding: "10px",
      backgroundColor: i % 2 === 0 ? "#242424" : "#0f0f0f",
    }
    return (
      <tbody key={i}>
        <tr>
          <td style={tdStyle}><a href={"https://www.pixiv.net/novel/show.php?id=" + work.id} target={"_blank"} rel={"noreferrer noopener"}>{work.title}</a></td>
          <td style={tdStyle}>{work.date}</td>
          <td style={tdStyle}>{work.tag.reduce((prev: string, curr: string): string => prev.concat(', ', curr))}</td>
          <td style={tdStyle}>{work.original.reduce((prev: string, curr: string): string => prev.concat(', ', curr))}</td>
        </tr>
      </tbody>
    );
  });

  return (
    <div className="card">
      <table border={2} className={"tbl-r02"}>
        <caption>作品一覧</caption>
        <thead>
        <tr>
          <th style={thStyle}>タイトル</th>
          <th style={thStyle}>投稿日</th>
          <th style={thStyle}>タグ</th>
          <th style={thStyle}>一次作品</th>
        </tr>
        </thead>
        {components}
      </table>
    </div>
  );
};