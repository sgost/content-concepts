import { Link } from "gatsby"
import React, { Fragment, useState, useEffect } from "react"
import {
  SitemapContainer,
  SitemapList
} from './styles';

const PopoverContent = props => {


  const [dataArr, setDataArr] = useState([]);

  // const content = props.content.sitemapList.filter(sitemap => {
  //   return sitemap.id !== 1;
  // });

  const newArrFun = () => {
    const testArr = props.serviceData?.map((item) => ({
      link: item?.node?.fields?.slug,
      title: item?.node?.frontmatter?.navTitle || item?.node?.frontmatter?.title,
      category: getNameFun(item?.node?.fields?.slug),
      id: item?.node?.frontmatter?.navIndex || 0
    }))?.filter((item) => item?.category !== undefined);
    setDataArr(testArr);
  }

  const getNameFun = (slug) => {
    if (slug.includes("academic_editing")) {
      return "Academic Editing"
    } else if (slug.includes("plagiarism_check")) {
      return "Plagarism Check"
    } else if (slug.includes("business_editing")) {
      return "Business Editing"
    } else if (slug.includes("content_writing")) {
      return "Content Writing"
    }
  }


  useEffect(() => {
    newArrFun();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const sortArrFun = (type) => {
    return dataArr?.filter((itm) => itm?.category === type)?.sort((a, b) => {
      return a.id - b.id;
    })
  }

  return (
    <Fragment>
      <SitemapContainer>
        <SitemapList>
          <h5>Academic Editing</h5>
          {sortArrFun("Academic Editing").map((dataItem) =>
            <Link to={dataItem.link} key={dataItem.id} onClick={props.onClick} className="linkItem">{dataItem.title}</Link>
          )}
        </SitemapList>
        <SitemapList>
          <h5>Plagarism Check</h5>
          {sortArrFun("Plagarism Check").map((dataItem) =>
            <Link to={dataItem.link} key={dataItem.id} onClick={props.onClick} className="linkItem">{dataItem.title}</Link>
          )}
        </SitemapList>
        <SitemapList>
          <h5>Business Editing</h5>
          {sortArrFun("Business Editing").map((dataItem) =>
            <Link to={dataItem.link} key={dataItem.id} onClick={props.onClick} className="linkItem">{dataItem.title}</Link>
          )}
        </SitemapList>
        <SitemapList>
          <h5>Content Writing</h5>
          {sortArrFun("Content Writing").map((dataItem) =>
            <Link to={dataItem.link} key={dataItem.id} onClick={props.onClick} className="linkItem">{dataItem.title}</Link>
          )}
        </SitemapList>
      </SitemapContainer>
    </Fragment>
  )
}

export default PopoverContent
