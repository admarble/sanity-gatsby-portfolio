import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import {Link} from 'gatsby'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import BlockContent from './block-content'
import Container from './container'
import RoleList from './role-list'
import PortableText from '@sanity/block-content-to-react'
import urlBuilder from '@sanity/image-url'

import styles from './project.module.css'
// import { render } from 'react-dom'

const urlFor = source =>
  urlBuilder({projectId: 'lihiizdb', dataset: 'production'}).image(source)

const serializer = {
  types: {
    figure: props => (<figure>
      <img
        src={urlFor(props.node.asset)
          // .width(200)
          .auto('format')
          .maxWidth(1080)
          .url()}
        fluid={'true'}
        alt={props.node.alt}
      />
      <figcaption>{props.node.caption}</figcaption>
      {/* {JSON.stringify(props, null, 2)} */}
    </figure>)
  }
}

function Project (props) {
  const {_rawBody, title, categories, mainImage, members, publishedAt, _rawProjectFocus, relatedProjects} = props
  return (
    <article className={styles.root}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            {props.mainImage && mainImage.asset && (
              <div className={styles.mainImage}>
                <img
                  src={imageUrlFor(buildImageObj(mainImage))
                    .maxWidth(1080).url()}
                  alt={mainImage.alt}
                />
              </div>
            )}
            <div className={styles.projectFocus}>
              <PortableText blocks={_rawProjectFocus} serializers={serializer} />
            </div>
          </div>
          <div className={styles.projectInfo}>
            <h1 className={styles.title}>{title}</h1>
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
            {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'YYYY')}
              </div>
            )}
            {members && members.length > 0 && <RoleList items={members} title='Project members' />}
            {categories && categories.length > 0 && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Categories</h3>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
            {relatedProjects && relatedProjects.length > 0 && (
              <div className={styles.relatedProjects}>
                <h3 className={styles.relatedProjectsHeadline}>Related projects</h3>
                <ul>
                  {relatedProjects.map(project => (
                    <li key={`related_${project._id}`}>
                      {project.slug ? (
                        <Link to={`/project/${project.slug.current}`}>{project.title}</Link>
                      ) : (
                        <span>{project.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Container>
    </article>
  )
}

export default Project
