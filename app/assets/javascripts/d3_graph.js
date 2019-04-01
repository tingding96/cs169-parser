
    console.log("this is x: ")
    console.log(jsonString)
    var jsonObj = JSON.parse(jsonString);
    console.log("--------------------")
    console.log(jsonObj)
    var JSON1 =
        {
            "WsGroupSaveLiteResult": {
                "responseMetadata": {
                    "millis": "152",
                    "serverVersion": "2.2.1"
                },
                "resultMetadata": {
                    "resultCode": "GROUP_ALREADY_EXISTS",
                    "resultMessage": "There were 0 successes and 1 failures of saving groups.edu.internet2.middleware.grouper.exception.GroupAddAlreadyExistsException: group already exists with name: 'edu:berkeley:app:bcourses:testgroup', stem name: edu:berkeley:app:bcourses, group extension: testgroup, group dExtension: testgroup, uuid: null, typeOfGroup: null,\nProblem in HibernateSession: HibernateSession (3164af87): notNew, notReadonly, READ_WRITE_NEW, activeTransaction, session (241dde06),\nProblem in HibernateSession: HibernateSession (419dba84): notNew, notReadonly, READ_WRITE_NEW, activeTransaction, session (241dde06),\nProblem saving group: edu:berkeley:app:bcourses:testgroup, thread: 176e05db,\nProblem in HibernateSession: HibernateSession (656f5956): new, notReadonly, READ_WRITE_NEW, notActiveTransaction, session (241dde06)",
                    "success": "F"
                },
                "wsGroup": {
                    "extension": "testgroup",
                    "name": "edu:berkeley:app:bcourses:testgroup"
                }
            }
        }


    var JSON2 =
        {
            "WsAddMemberResults": {
                "responseMetadata": {
                    "millis": "212",
                    "serverVersion": "2.2.1"
                },
                "resultMetadata": {
                    "resultCode": "PROBLEM_WITH_ASSIGNMENT",
                    "resultMessage": "There were 2 successes and 1 failures of users added to the group.",
                    "success": "F"
                },
                "results": [{
                    "resultMetadata": {
                        "resultCode": "SUCCESS_ALREADY_EXISTED",
                        "success": "T"
                    },
                    "wsSubject": {
                        "id": "242881",
                        "name": "242881",
                        "resultCode": "SUCCESS",
                        "sourceId": "ldap",
                        "success": "T"
                    }
                },
                    {
                        "resultMetadata": {
                            "resultCode": "SUCCESS",
                            "success": "T"
                        },
                        "wsSubject": {
                            "id": "211159",
                            "name": "211159",
                            "resultCode": "SUCCESS",
                            "sourceId": "ldap",
                            "success": "T"
                        }
                    },
                    {
                        "resultMetadata": {
                            "resultCode": "EXCEPTION",
                            "resultMessage": "edu.internet2.middleware.grouper.ws.exceptions.WsInvalidQueryException: Problem with Subject, SUBJECT_NOT_FOUND, WsSubjectLookup[\n  cause=edu.internet2.middleware.subject.SubjectNotFoundException: subject not found: 9999999,\n  subjectFindResult=SUBJECT_NOT_FOUND,subjectId=9999999]\n\tat edu.internet2.middleware.grouper.ws.coresoap.WsSubjectLookup.retrieveSubject(WsSubjectLookup.java:535)\n\tat edu.internet2.middleware.grouper.ws.coresoap.WsAddMemberResult.processSubject(WsAddMemberResult.java:263)\n\tat edu.internet2.middleware.grouper.ws.GrouperServiceLogic$1.callback(GrouperServiceLogic.java:292)\n\tat edu.internet2.middleware.grouper.internal.dao.hib3.Hib3TransactionDAO$1.callback(Hib3TransactionDAO.java:66)\n\tat edu.internet2.middleware.grouper.hibernate.HibernateSession.callbackHibernateSession(HibernateSession.java:668)\n\tat edu.internet2.middleware.grouper.internal.dao.hib3.Hib3TransactionDAO.transactionCallback(Hib3TransactionDAO.java:56)\n\tat edu.internet2.middleware.grouper.hibernate.GrouperTransaction.callbackGrouperTransaction(GrouperTransaction.java:87)\n\tat edu.internet2.middleware.grouper.ws.GrouperServiceLogic.addMember(GrouperServiceLogic.java:237)\n\tat edu.internet2.middleware.grouper.ws.coresoap.GrouperService.addMember(GrouperService.java:1263)\n\tat edu.internet2.middleware.grouper.ws.rest.GrouperServiceRest.addMember(GrouperServiceRest.java:315)\n\tat edu.internet2.middleware.grouper.ws.rest.method.GrouperWsRestPutGroup$1.service(GrouperWsRestPutGroup.java:63)\n\tat edu.internet2.middleware.grouper.ws.rest.method.GrouperWsRestPut$1.service(GrouperWsRestPut.java:110)\n\tat edu.internet2.middleware.grouper.ws.rest.method.GrouperRestHttpMethod$3.service(GrouperRestHttpMethod.java:104)\n\tat edu.internet2.middleware.grouper.ws.rest.GrouperRestServlet.service(GrouperRestServlet.java:199)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:717)\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:290)\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206)\n\tat edu.internet2.middleware.grouper.ws.GrouperServiceJ2ee.doFilter(GrouperServiceJ2ee.java:661)\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:235)\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206)\n\tat org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:219)\n\tat org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:191)\n\tat org.apache.catalina.authenticator.AuthenticatorBase.invoke(AuthenticatorBase.java:558)\n\tat org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:127)\n\tat org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:102)\n\tat org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:109)\n\tat org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:298)\n\tat org.apache.coyote.http11.Http11Processor.process(Http11Processor.java:857)\n\tat org.apache.coyote.http11.Http11Protocol$Http11ConnectionHandler.process(Http11Protocol.java:588)\n\tat org.apache.tomcat.util.net.JIoEndpoint$Worker.run(JIoEndpoint.java:489)\n\tat java.lang.Thread.run(Thread.java:745)\nCaused by: edu.internet2.middleware.subject.SubjectNotFoundException: subject not found: 9999999\n\tat edu.internet2.middleware.grouper.subj.SourcesXmlResolver.thereCanOnlyBeOne(SourcesXmlResolver.java:486)\n\tat edu.internet2.middleware.grouper.subj.SourcesXmlResolver.find(SourcesXmlResolver.java:133)\n\tat edu.internet2.middleware.grouper.subj.CachingResolver.find(CachingResolver.java:125)\n\tat edu.internet2.middleware.grouper.subj.ValidatingResolver.find(ValidatingResolver.java:91)\n\tat edu.internet2.middleware.grouper.SubjectFinder.findById(SubjectFinder.java:431)\n\tat edu.internet2.middleware.grouper.ws.coresoap.WsSubjectLookup.retrieveSubjectIfNeeded(WsSubjectLookup.java:311)\n\tat edu.internet2.middleware.grouper.ws.coresoap.WsSubjectLookup.retrieveSubject(WsSubjectLookup.java:486)\n\tat edu.internet2.middleware.grouper.ws.GrouperServiceLogic$1.callback(GrouperServiceLogic.java:290)\n\t... 28 more",
                            "success": "F"
                        },
                        "wsSubject": {
                            "id": "9999999"
                        }
                    }
                ],
                "wsGroupAssigned": {
                    "displayExtension": "testgroup",
                    "displayName": "edu:berkeley:app:bCourses:testgroup",
                    "extension": "testgroup",
                    "idIndex": "19235",
                    "name": "edu:berkeley:app:bcourses:testgroup",
                    "typeOfGroup": "group",
                    "uuid": "1cc4398e7aa246af945be1157f448561"
                }
            }
        }


    var testJSON = {
        "a": "1",
        "b": "2",
        "c": {
            "d": "3",
            "e": "4"
        }
    }

    var jsonString = document
    console.log("----")
    console.log(jsonString)

    var nodes = []
    var nodeStrings = []
    var links = []

    function createNode(id, reflexive = false) {
        return {id: id, reflexive: reflexive}
    }

    function createLink(source, target, left, right) {
        return {source: source, target: target, left: left, right: right}
    }

    function traverse(name, node) {

        console.log(name);
        let newNode = createNode(name)
        if (!nodeStrings.includes(name)) {
            nodes.push(newNode)
            nodeStrings.push(name)
        }
        for (var child in node) {
            let childName = (isNaN(child) ? child : child + "-under-" + name)
            let newLink = createLink(childName, name, false, true)
            links.push(newLink)
            if (node[child] !== null && typeof (node[child]) == "object") {
                traverse(childName, node[child]);
            } else {
                newNode = createNode(childName)
                if (!nodeStrings.includes(childName)) {
                    nodes.push(newNode)
                    nodeStrings.push(childName)
                }
            }
        }
    }

traverse("[ TEST JSON ]", jsonObj);
// traverse("[ TEST JSON ]", JSON2);

// ############################################################################################################################################
// set up SVG for D3
    var width = 960;
    var height = 500;

    var svg = d3.select('body')
        .append('svg')
        .on('contextmenu', () => {
            d3.event.preventDefault();
        })
        .attr("class", "d3-container")
        .call(d3.zoom().on("zoom", function () {
            svg.attr("transform", d3.event.transform)
        }))
        .append("g");


// set up initial nodes and links
//  - nodes are known by 'id', not by index in array.
//  - reflexive edges are indicated on the node (as a bold black circle).
//  - links are always source < target; edge directions are set by 'left' and 'right'.
// const nodes = [
//   { id: 0, reflexive: false },
//   { id: 1, reflexive: true },
//   { id: 2, reflexive: false }
// ];
// let lastNodeId = 2;
// const links = [
//   { source: nodes[0], target: nodes[1], left: false, right: true },
//   { source: nodes[1], target: nodes[2], left: false, right: true }
// ];

// init D3 force layout
    var force = d3.forceSimulation()
        .force('link', d3.forceLink().id((d) => d.id).distance(150))
        .force('charge', d3.forceManyBody().strength(-500))
        .force('x', d3.forceX(width / 2))
        .force('y', d3.forceY(height / 2))
        .on('tick', tick);

// init D3 drag support
    var drag = d3.drag()
    // Mac Firefox doesn't distinguish between left/right click when Ctrl is held...
        .filter(() => d3.event.button === 0 || d3.event.button === 2)
        .on('start', (d) => {
            if (!d3.event.active) force.alphaTarget(0.3).restart();

            d.fx = d.x;
            d.fy = d.y;
        })
        .on('drag', (d) => {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
        })
        .on('end', (d) => {
            if (!d3.event.active) force.alphaTarget(0);

            d.fx = null;
            d.fy = null;
        });

// define arrow markers for graph links
    svg.append('svg:defs').append('svg:marker')
        .attr('id', 'end-arrow')
        .attr('viewBox', '0 -5 10 10')
        .attr('refX', 6)
        .attr('markerWidth', 3)
        .attr('markerHeight', 3)
        .attr('orient', 'auto')
        .append('svg:path')
        .attr('d', 'M0,-5L10,0L0,5')
        .attr('fill', '#000');

    svg.append('svg:defs').append('svg:marker')
        .attr('id', 'start-arrow')
        .attr('viewBox', '0 -5 10 10')
        .attr('refX', 4)
        .attr('markerWidth', 3)
        .attr('markerHeight', 3)
        .attr('orient', 'auto')
        .append('svg:path')
        .attr('d', 'M10,-5L0,0L10,5')
        .attr('fill', '#000');

// line displayed when dragging new nodes
    var dragLine = svg.append('svg:path')
        .attr('class', 'link dragline hidden')
        .attr('d', 'M0,0L0,0');

// handles to link and node element groups
    var path = svg.append('svg:g').selectAll('path');
    var circle = svg.append('svg:g').selectAll('g');

// mouse event vars
    var selectedNode = null;
    var selectedLink = null;
    var mousedownLink = null;
    var mousedownNode = null;
    var mouseupNode = null;

    function resetMouseVars() {
        mousedownNode = null;
        mouseupNode = null;
        mousedownLink = null;
    }

// update force layout (called automatically each iteration)
    function tick() {
        // draw directed edges with proper padding from node centers
        path.attr('d', (d) => {
            const deltaX = d.target.x - d.source.x;
            const deltaY = d.target.y - d.source.y;
            const dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            const normX = deltaX / dist;
            const normY = deltaY / dist;
            const sourcePadding = d.left ? 17 : 12;
            const targetPadding = d.right ? 17 : 12;
            const sourceX = d.source.x + (sourcePadding * normX);
            const sourceY = d.source.y + (sourcePadding * normY);
            const targetX = d.target.x - (targetPadding * normX);
            const targetY = d.target.y - (targetPadding * normY);

            return `M${sourceX},${sourceY}L${targetX},${targetY}`;
        });

        circle.attr('transform', (d) => `translate(${d.x},${d.y})`);
    }

// update graph (called when needed)
    function restart() {
        // path (link) group
        path = path.data(links);

        // update existing links
        path.classed('selected', (d) => d === selectedLink)
            .style('marker-start', (d) => d.left ? 'url(#start-arrow)' : '')
            .style('marker-end', (d) => d.right ? 'url(#end-arrow)' : '');

        // remove old links
        path.exit().remove();

        // add new links
        path = path.enter().append('svg:path')
            .attr('class', 'link')
            .classed('selected', (d) => d === selectedLink)
            .style('marker-start', (d) => d.left ? 'url(#start-arrow)' : '')
            .style('marker-end', (d) => d.right ? 'url(#end-arrow)' : '')
            .on('mousedown', (d) => {
                if (d3.event.ctrlKey) return;

                // select link
                mousedownLink = d;
                selectedLink = (mousedownLink === selectedLink) ? null : mousedownLink;
                selectedNode = null;
                restart();
            })
            .merge(path);

        // circle (node) group
        // NB: the function arg is crucial here! nodes are known by id, not by index!
        circle = circle.data(nodes, (d) => d.id);

        // update existing nodes (reflexive & selected visual states)
        // circle.selectAll('circle')
        // .style('fill', "red")
        // .classed('reflexive', (d) => d.reflexive);

        // remove old nodes
        circle.exit().remove();

        // add new nodes
        const g = circle.enter().append('svg:g');

        g.append('svg:circle')
            .attr('class', 'node')
            .attr('r', 12)
            .style('fill', "#8491B5")
            .classed('reflexive', (d) => d.reflexive)
            .on('mouseover', function (d) {
                if (!mousedownNode || d === mousedownNode) return;
                // enlarge target node
                d3.select(this).attr('transform', 'scale(1.1)');
            })
            .on('mouseout', function (d) {
                if (!mousedownNode || d === mousedownNode) return;
                // unenlarge target node
                d3.select(this).attr('transform', '');
            })
            .on('mousedown', (d) => {
                if (d3.event.ctrlKey) return;

                // select node
                mousedownNode = d;
                selectedNode = (mousedownNode === selectedNode) ? null : mousedownNode;
                selectedLink = null;

                // reposition drag line
                dragLine
                    .style('marker-end', 'url(#end-arrow)')
                    .classed('hidden', false)
                    .attr('d', `M${mousedownNode.x},${mousedownNode.y}L${mousedownNode.x},${mousedownNode.y}`);

                restart();
            })
            .on('mouseup', function (d) {
                if (!mousedownNode) return;

                // needed by FF
                dragLine
                    .classed('hidden', true)
                    .style('marker-end', '');

                // check for drag-to-self
                mouseupNode = d;
                if (mouseupNode === mousedownNode) {
                    resetMouseVars();
                    return;
                }

                // unenlarge target node
                d3.select(this).attr('transform', '');

                // add link to graph (update if exists)
                // NB: links are strictly source < target; arrows separately specified by booleans
                const isRight = mousedownNode.id < mouseupNode.id;
                const source = isRight ? mousedownNode : mouseupNode;
                const target = isRight ? mouseupNode : mousedownNode;

                const link = links.filter((l) => l.source === source && l.target === target)[0];
                if (link) {
                    link[isRight ? 'right' : 'left'] = true;
                } else {
                    links.push({source, target, left: !isRight, right: isRight});
                }

                // select new link
                selectedLink = link;
                selectedNode = null;
                restart();
            });

        // show node IDs
        g.append('svg:text')
            .attr('x', 0)
            .attr('y', 4)
            .attr('class', 'id')
            .text((d) => d.id);

        circle = g.merge(circle);

        // set the graph in motion
        force
            .nodes(nodes)
            .force('link').links(links);

        force.alphaTarget(0.3).restart();
    }

// function mousedown() {
//   // because :active only works in WebKit?
//   svg.classed('active', true);

//   if (d3.event.ctrlKey || mousedownNode || mousedownLink) return;

//   // insert new node at point
//   const point = d3.mouse(this);
//   const node = { id: ++lastNodeId, reflexive: false, x: point[0], y: point[1] };
//   nodes.push(node);

//   restart();
// }

// function mousemove() {
//   if (!mousedownNode) return;

//   // update drag line
//   dragLine.attr('d', `M${mousedownNode.x},${mousedownNode.y}L${d3.mouse(this)[0]},${d3.mouse(this)[1]}`);
// }

// function mouseup() {
//   if (mousedownNode) {
//     // hide drag line
//     dragLine
//     .classed('hidden', true)
//     .style('marker-end', '');
//   }

//   // because :active only works in WebKit?
//   svg.classed('active', false);

//   // clear mouse event vars
//   resetMouseVars();
// }

// function spliceLinksForNode(node) {
//   const toSplice = links.filter((l) => l.source === node || l.target === node);
//   for (const l of toSplice) {
//     links.splice(links.indexOf(l), 1);
//   }
// }

// only respond once per keydown
    var lastKeyDown = -1;

// function keydown() {
//   d3.event.preventDefault();

//   if (lastKeyDown !== -1) return;
//   lastKeyDown = d3.event.keyCode;

//   // ctrl
//   if (d3.event.keyCode === 17) {
//     circle.call(drag);
//     svg.classed('ctrl', true);
//     return;
//   }

//   if (!selectedNode && !selectedLink) return;

//   switch (d3.event.keyCode) {
//     case 8: // backspace
//     case 46: // delete
//     if (selectedNode) {
//       nodes.splice(nodes.indexOf(selectedNode), 1);
//       spliceLinksForNode(selectedNode);
//     } else if (selectedLink) {
//       links.splice(links.indexOf(selectedLink), 1);
//     }
//     selectedLink = null;
//     selectedNode = null;
//     restart();
//     break;
//     case 66: // B
//     if (selectedLink) {
//         // set link direction to both left and right
//         selectedLink.left = true;
//         selectedLink.right = true;
//       }
//       restart();
//       break;
//     case 76: // L
//     if (selectedLink) {
//         // set link direction to left only
//         selectedLink.left = true;
//         selectedLink.right = false;
//       }
//       restart();
//       break;
//     case 82: // R
//     if (selectedNode) {
//         // toggle node reflexivity
//         selectedNode.reflexive = !selectedNode.reflexive;
//       } else if (selectedLink) {
//         // set link direction to right only
//         selectedLink.left = false;
//         selectedLink.right = true;
//       }
//       restart();
//       break;
//     }
//   }

//   function keyup() {
//     lastKeyDown = -1;

//   // ctrl
//   if (d3.event.keyCode === 17) {
//     circle.on('.drag', null);
//     svg.classed('ctrl', false);
//   }
// }

// // app starts here
// svg.on('mousedown', mousedown)
// .on('mousemove', mousemove)
// .on('mouseup', mouseup);
// d3.select(window)
// .on('keydown', keydown)
// .on('keyup', keyup);

// panning + zooming
// https://coderwall.com/p/psogia/simplest-way-to-add-zoom-pan-on-d3-js


    restart();

