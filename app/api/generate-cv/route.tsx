import { NextRequest, NextResponse } from 'next/server';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  pdf,
} from '@react-pdf/renderer';
import { PortfolioData } from '@/types/portfolio';
import { formatDate } from '@/lib/utils';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    fontFamily: 'Helvetica',
  },
  // Left sidebar (dark)
  sidebar: {
    width: '35%',
    backgroundColor: '#3f4447',
    padding: 30,
    color: '#ffffff',
  },
  sidebarName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#ffffff',
  },
  sidebarTitle: {
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 20,
    color: '#d1d5db',
  },
  sidebarSection: {
    marginTop: 25,
  },
  sidebarSectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 12,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: '#ffffff',
  },
  contactItem: {
    fontSize: 10,
    marginBottom: 8,
    color: '#d1d5db',
    flexDirection: 'row',
    alignItems: 'center',
  },
  skillItem: {
    fontSize: 10,
    marginBottom: 6,
    color: '#d1d5db',
  },
  // Right main content
  mainContent: {
    width: '65%',
    padding: 30,
    paddingLeft: 35,
  },
  mainSection: {
    marginBottom: 25,
  },
  mainSectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: '#1f2937',
  },
  objective: {
    fontSize: 11,
    lineHeight: 1.6,
    color: '#4b5563',
    marginBottom: 20,
  },
  // Experience/Project items
  itemContainer: {
    marginBottom: 18,
  },
  itemTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 3,
  },
  itemCompany: {
    fontSize: 11,
    color: '#4b5563',
    marginBottom: 2,
  },
  itemDate: {
    fontSize: 10,
    color: '#6b7280',
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bulletPoint: {
    fontSize: 10,
    color: '#4b5563',
    marginLeft: 12,
    marginBottom: 4,
    lineHeight: 1.5,
  },
  highlight: {
    fontStyle: 'italic',
  },
  // Education
  educationItem: {
    marginBottom: 12,
  },
  degree: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 3,
  },
  institution: {
    fontSize: 10,
    color: '#d1d5db',
    marginBottom: 2,
  },
  eduDate: {
    fontSize: 9,
    color: '#9ca3af',
  },
});

function CVDocument({ data }: { data: PortfolioData }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Left Sidebar */}
        <View style={styles.sidebar}>
          <Text style={styles.sidebarName}>{data.name.toUpperCase()}</Text>
          <Text style={styles.sidebarTitle}>{data.title}</Text>

          {/* Contact */}
          <View style={styles.sidebarSection}>
            <View style={styles.contactItem}>
              <Text>{data.email}</Text>
            </View>
            <View style={styles.contactItem}>
              <Text>{data.phone}</Text>
            </View>
            <View style={styles.contactItem}>
              <Text>{data.location}</Text>
            </View>
            <View style={styles.contactItem}>
              <Text>LinkedIn</Text>
            </View>
          </View>

          {/* Education */}
          <View style={styles.sidebarSection}>
            <Text style={styles.sidebarSectionTitle}>Education</Text>
            {data.education.map((edu) => (
              <View key={edu.id} style={styles.educationItem}>
                <Text style={styles.degree}>{edu.degree}</Text>
                <Text style={styles.degree}>{edu.field}</Text>
                <Text style={styles.institution}>{edu.institution}</Text>
                <Text style={styles.eduDate}>
                  {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                </Text>
              </View>
            ))}
          </View>

          {/* Skills */}
          <View style={styles.sidebarSection}>
            <Text style={styles.sidebarSectionTitle}>Skills</Text>
            {[
              ...data.skills.languages,
              ...data.skills.frameworks,
              ...data.skills.tools,
            ].map((skill, i) => (
              <Text key={i} style={styles.skillItem}>
                • {skill}
              </Text>
            ))}
          </View>
        </View>

        {/* Right Main Content */}
        <View style={styles.mainContent}>
          {/* Career Objective */}
          <View style={styles.mainSection}>
            <Text style={styles.mainSectionTitle}>Career Objective</Text>
            <Text style={styles.objective}>{data.summary}</Text>
          </View>

          {/* Work Experience */}
          <View style={styles.mainSection}>
            <Text style={styles.mainSectionTitle}>Work Experience</Text>
            {data.experience.map((exp) => (
              <View key={exp.id} style={styles.itemContainer}>
                <Text style={styles.itemTitle}>{exp.position}</Text>
                <Text style={styles.itemCompany}>{exp.company}</Text>
                <View style={styles.itemDate}>
                  <Text>
                    {formatDate(exp.startDate)} -{' '}
                    {exp.current ? 'current' : formatDate(exp.endDate!)} •{' '}
                    {exp.location}
                  </Text>
                </View>
                {exp.achievements.slice(0, 4).map((achievement, i) => {
                  const parts = achievement.split(/(\d+%)/g);
                  return (
                    <View key={i} style={{ flexDirection: 'row' }}>
                      <Text style={styles.bulletPoint}>
                        •{' '}
                        {parts.map((part, idx) =>
                          /\d+%/.test(part) ? (
                            <Text key={idx} style={styles.highlight}>
                              {part}
                            </Text>
                          ) : (
                            <Text key={idx}>{part}</Text>
                          )
                        )}
                      </Text>
                    </View>
                  );
                })}
              </View>
            ))}
          </View>

          {/* Projects */}
          <View style={styles.mainSection}>
            <Text style={styles.mainSectionTitle}>Projects</Text>
            {data.projects
              .filter((p) => p.featured)
              .map((project) => (
                <View key={project.id} style={styles.itemContainer}>
                  <Text style={styles.itemTitle}>{project.name}</Text>
                  <Text style={styles.itemDate}>2023 - 2024</Text>
                  {project.highlights.slice(0, 3).map((highlight, i) => {
                    const parts = highlight.split(/(\d+%)/g);
                    return (
                      <View key={i} style={{ flexDirection: 'row' }}>
                        <Text style={styles.bulletPoint}>
                          •{' '}
                          {parts.map((part, idx) =>
                            /\d+%/.test(part) ? (
                              <Text key={idx} style={styles.highlight}>
                                {part}
                              </Text>
                            ) : (
                              <Text key={idx}>{part}</Text>
                            )
                          )}
                        </Text>
                      </View>
                    );
                  })}
                </View>
              ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}

export async function POST(request: NextRequest) {
  try {
    const data: PortfolioData = await request.json();

    // eslint-disable-next-line react-hooks/error-boundaries
    const pdfBlob = await pdf(<CVDocument data={data} />).toBlob();

    return new NextResponse(pdfBlob, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${data.name.replace(/\s+/g, '_')}_CV.pdf"`,
      },
    });
  } catch (error) {
    console.error('Error generating CV:', error);
    return NextResponse.json(
      { error: 'Failed to generate CV' },
      { status: 500 }
    );
  }
}
