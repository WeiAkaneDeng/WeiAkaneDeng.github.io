window.PORTAL_DATA = {
  "profile": {
    "name": "Wei Q. Deng",
    "affiliation": "McMaster University",
    "fields": [
      "Statistical Methods",
      "Genetic Epidemiology",
      "Addiction, Neurogenomics & Behavioural Genetics",
      "Epigenetics & Early Life Health",
      "Cardiometabolic Health & Aging"
    ],
    "scholar": "https://scholar.google.com/citations?hl=en&user=pvd7ABUAAAAJ&view_op=list_works&sortby=pubdate",
    "updated": "2026-06-29"
  },
  "categories": {
    "statistical_methods": {
      "label": "Statistical Methods",
      "short": "Statistical methods",
      "summary": {
        "evidence": "This body of work develops statistical tools for high-dimensional biological data, including SNP prioritization, penalized probabilistic PCA, X-inclusive software, and modern collinearity diagnostics.",
        "contribution": "The papers translate difficult modeling problems into algorithms, packages, and visual diagnostics that applied researchers can reuse.",
        "significance": "Together, they make inference more robust when data are sparse, correlated, multi-dimensional, or too high-dimensional for classical assumptions."
      }
    },
    "genetic_epidemiology": {
      "label": "Genetic Epidemiology",
      "short": "Genetic epidemiology",
      "summary": {
        "evidence": "These studies examine how genetic variation, gene-environment interaction, regional polygenic structure, ancestry, and population heterogeneity shape complex traits.",
        "contribution": "The work connects statistical genetics with cohort-scale questions and clarifies when genetic effects differ by context, population, region, or modeling assumption.",
        "significance": "This domain strengthens the bridge between method development and interpretable population-level genetic discovery."
      }
    },
    "addiction_neurogenomics_behavioural_genetics": {
      "label": "Addiction, Neurogenomics & Behavioural Genetics",
      "short": "Addiction and behavioural genetics",
      "summary": {
        "evidence": "These studies connect impulsive choice, impulsive personality, externalizing liability, alcohol-related phenotypes, and brain-behaviour associations to polygenic and longitudinal evidence.",
        "contribution": "The work refines behavioural phenotypes, applies GWAS and PheWAS designs, and shows that quality control and developmental framing improve signal detection.",
        "significance": "The category strengthens biological interpretation of addiction vulnerability, neurobehavioural variation, and impulsivity while highlighting measurement quality as part of discovery."
      }
    },
    "epigenetics": {
      "label": "Epigenetics & Early Life Health",
      "short": "Epigenetics and early life",
      "summary": {
        "evidence": "These papers examine DNA methylation and early-life signatures linked to maternal smoking, gestational age, diet-related exposures, fetal development, adiposity, and diabetes risk.",
        "contribution": "The studies combine cohort evidence, methylation risk scores, meta-analysis, and review synthesis to clarify how prenatal and early-life environments leave measurable molecular traces.",
        "significance": "The work supports precision prevention by connecting molecular biomarkers to maternal-child and cardiometabolic outcomes across diverse populations."
      }
    },
    "cardiometabolic_aging": {
      "label": "Cardiometabolic Health & Aging",
      "short": "Cardiometabolic health and aging",
      "summary": {
        "evidence": "This category covers obesity, diabetes, body composition, atrial fibrillation, kidney outcomes, pregnancy-related metabolic risk, and precision weight management.",
        "contribution": "The studies bring genetic, biomarker, cohort, and clinical evidence into health questions where ancestry, aging, comorbidity, and heterogeneity change interpretation.",
        "significance": "The findings support earlier risk stratification and more population-aware prevention for cardiometabolic and aging-related health outcomes."
      }
    }
  },
  "evidenceMap": {
    "label": "Evidence Map",
    "summary": {
      "evidence": "A network view of the portal showing how methods, population genetics, addiction neurogenomics, epigenetics, and cardiometabolic health are connected by shared data structures and study designs.",
      "contribution": "The map highlights cross-domain bridges such as polygenic scores, longitudinal cohorts, methylation biomarkers, phenotype quality control, and high-dimensional omics methods.",
      "significance": "It makes the research program easier to read as an integrated evidence system rather than a set of isolated papers."
    },
    "nodes": [
      {
        "id": "statistical_methods",
        "label": "Statistical Methods",
        "x": 90,
        "y": 130,
        "kind": "domain",
        "note": "Algorithms, software, high-dimensional diagnostics"
      },
      {
        "id": "genetic_epidemiology",
        "label": "Genetic Epidemiology",
        "x": 300,
        "y": 82,
        "kind": "domain",
        "note": "GWAS, heterogeneity, polygenic structure"
      },
      {
        "id": "addiction_neurogenomics_behavioural_genetics",
        "label": "Addiction, Neurogenomics & Behavioural Genetics",
        "x": 560,
        "y": 135,
        "kind": "domain",
        "note": "Impulsivity, externalizing, brain-behaviour signal"
      },
      {
        "id": "epigenetics",
        "label": "Epigenetics & Early Life Health",
        "x": 350,
        "y": 292,
        "kind": "domain",
        "note": "Methylation, prenatal exposure, early development"
      },
      {
        "id": "cardiometabolic_aging",
        "label": "Cardiometabolic Health & Aging",
        "x": 652,
        "y": 304,
        "kind": "domain",
        "note": "Obesity, diabetes, kidney, aging-related risk"
      },
      {
        "id": "cohorts",
        "label": "Longitudinal Cohorts",
        "x": 160,
        "y": 322,
        "kind": "bridge",
        "note": "ALSPAC, ABCD, birth cohorts, South Asian cohorts"
      },
      {
        "id": "omics_biomarkers",
        "label": "Omics & Biomarkers",
        "x": 485,
        "y": 218,
        "kind": "bridge",
        "note": "PRS, DNA methylation, mtDNA, molecular signatures"
      }
    ],
    "links": [
      {
        "source": "statistical_methods",
        "target": "genetic_epidemiology",
        "label": "models enable inference",
        "detail": "Variance heterogeneity, X-inclusive analysis, SNP prioritization, and regional modeling support genetic epidemiology questions."
      },
      {
        "source": "statistical_methods",
        "target": "omics_biomarkers",
        "label": "high-dimensional structure",
        "detail": "PCA, collinearity diagnostics, and joint location-scale methods help interpret dense omics and biomarker data."
      },
      {
        "source": "genetic_epidemiology",
        "target": "addiction_neurogenomics_behavioural_genetics",
        "label": "polygenic behavioural risk",
        "detail": "GWAS, PRS, and PheWAS designs connect population genetics to impulsivity, alcohol-related mechanisms, and externalizing liability."
      },
      {
        "source": "genetic_epidemiology",
        "target": "epigenetics",
        "label": "ancestry-aware cohort evidence",
        "detail": "Population-aware modeling helps compare methylation and early-life signatures across ancestry and cohort contexts."
      },
      {
        "source": "epigenetics",
        "target": "cardiometabolic_aging",
        "label": "early-life molecular risk",
        "detail": "Methylation risk scores, diet-related EWAS, gestational diabetes, and adiposity trajectories connect early exposures to cardiometabolic outcomes."
      },
      {
        "source": "addiction_neurogenomics_behavioural_genetics",
        "target": "cardiometabolic_aging",
        "label": "behavioural and clinical overlap",
        "detail": "Impulsivity, PTSD, weight management, and broader externalizing pathways link behavioural traits with cardiometabolic health."
      },
      {
        "source": "cohorts",
        "target": "genetic_epidemiology",
        "label": "population sampling",
        "detail": "Cohort design anchors genetic discovery in real population structure and ancestry-aware health questions."
      },
      {
        "source": "cohorts",
        "target": "addiction_neurogenomics_behavioural_genetics",
        "label": "development over time",
        "detail": "Longitudinal cohorts make it possible to refine impulsivity and externalizing phenotypes across development."
      },
      {
        "source": "cohorts",
        "target": "epigenetics",
        "label": "prenatal and early-life follow-up",
        "detail": "Birth and family cohorts connect exposure timing, methylation signatures, and later health outcomes."
      },
      {
        "source": "omics_biomarkers",
        "target": "cardiometabolic_aging",
        "label": "biomarker translation",
        "detail": "Molecular and genetic biomarkers support risk stratification for diabetes, kidney, obesity, and aging-related outcomes."
      }
    ]
  },
  "papers": [
    {
      "id": "2026-garbage-in-garbage-out-stringent-quality-control-of-behavioural-data-boosts-signal-in-br",
      "year": 2026,
      "title": "Garbage In, Garbage Out: Stringent Quality Control of Behavioural Data Boosts Signal in Brain–Behaviour Associations",
      "authors": "Mahmoud Elsayed,Wei Q. Deng,Kyla L. Belisario, James MacKillop",
      "journal": "Cerebral Cortex",
      "note": "Co-author",
      "category": "addiction_neurogenomics_behavioural_genetics",
      "pdf": "papers/2026-garbage-in-garbage-out-stringent-quality-control-of-behavioural-data-boosts-signal-in-br.pdf",
      "thumb": "assets/thumbs/2026-garbage-in-garbage-out-stringent-quality-control-of-behavioural-data-boosts-signal-in-br-1.png",
      "evidence": "Evaluated how stringent quality control of behavioral data changes brain-behavior associations.",
      "contribution": "Demonstrated that data-quality filtering can increase detectable neurobehavioral signal.",
      "significance": "Positions measurement quality as a scientific finding, not just a preprocessing chore."
    },
    {
      "id": "2026-perfect-collinearity-not-created-equal-measuring-and-visualizing-the-severity-of-multi-c",
      "year": 2026,
      "title": "Perfect collinearity not created equal: measuring and visualizing the severity of multi-collinearity of modern omics data",
      "authors": "Wei Q. Deng, Radu V. Craiu and Lei Sun",
      "journal": "Statistical Applications in Genetics and Molecular Biology",
      "note": "First author",
      "category": "statistical_methods",
      "pdf": "papers/2026-perfect-collinearity-not-created-equal-measuring-and-visualizing-the-severity-of-multi-c.pdf",
      "thumb": "assets/thumbs/2026-perfect-collinearity-not-created-equal-measuring-and-visualizing-the-severity-of-multi-c-1.png",
      "evidence": "Defined measures and visualizations for severity patterns of perfect collinearity in omics data.",
      "contribution": "Distinguished different redundancy structures that classical diagnostics collapse together.",
      "significance": "Improves interpretation of high-dimensional data where n is smaller than p."
    },
    {
      "id": "2026-precision-weight-loss-requires-more-than-behavior-change",
      "year": 2026,
      "title": "Precision weight loss requires more than behavior change",
      "authors": "Wei Q. Deng, Russell de Souza",
      "journal": "JAMA Netw Open",
      "note": "First author",
      "category": "cardiometabolic_aging",
      "pdf": "papers/2026-precision-weight-loss-requires-more-than-behavior-change.pdf",
      "thumb": "assets/thumbs/2026-precision-weight-loss-requires-more-than-behavior-change-1.png",
      "evidence": "Commented on why weight-loss interventions need to account for more than behavior change.",
      "contribution": "Framed mental health, context, and biology as part of precision obesity care.",
      "significance": "Signals a broader model for equitable, personalized weight management."
    },
    {
      "id": "2026-prognostic-biomarkers-of-future-diabetes-in-south-asian-women-diagnosed-with-gestational",
      "year": 2026,
      "title": "Prognostic biomarkers of future diabetes in South Asian women diagnosed with gestational diabetes: a prospective cohort study",
      "authors": "Azab, S.M., Lamri, A., Gayowsky, A. et al. Prognostic biomarkers of future diabetes in South Asian women diagnosed with gestational diabetes: a prospective cohort study. BMC Endocr Disord (2026). https://doi.org/10.1186/s12902-026-02290-2",
      "journal": "BMC Endocrine Disorders",
      "note": "Co-author",
      "category": "cardiometabolic_aging",
      "pdf": null,
      "thumb": null,
      "evidence": "Studied biomarkers predicting future diabetes after gestational diabetes in South Asian women.",
      "contribution": "Contributed prospective evidence for risk stratification after pregnancy complications.",
      "significance": "Can help target follow-up and prevention for a high-risk cardiometabolic group."
    },
    {
      "id": "2026-the-genoeconomics-of-impulsive-intertemporal-choice-a-critical-review",
      "year": 2026,
      "title": "The Genoeconomics of Impulsive Intertemporal Choice: A Critical Review",
      "authors": "nan",
      "journal": "Journal of the Experimental Analysis of Behavior",
      "note": "First author",
      "category": "addiction_neurogenomics_behavioural_genetics",
      "pdf": "papers/2026-the-genoeconomics-of-impulsive-intertemporal-choice-a-critical-review.pdf",
      "thumb": "assets/thumbs/2026-the-genoeconomics-of-impulsive-intertemporal-choice-a-critical-review-1.png",
      "evidence": "Critically reviewed genetic evidence for impulsive intertemporal choice.",
      "contribution": "Integrated economic choice models with behavioral and molecular genetic findings.",
      "significance": "Defines a clearer agenda for genoeconomics research on delay discounting and decision-making."
    },
    {
      "id": "2025-a-scoping-review-of-epigenetic-signatures-of-diet-and-diet-related-metabolites",
      "year": 2025,
      "title": "A Scoping Review of Epigenetic Signatures of Diet and Diet-related Metabolites",
      "authors": "Asif R, Liu R, de Souza RJ, Azab S, Chong M, Anand SS, Deng WQ",
      "journal": "Yale Journal of Biology and Medicine",
      "note": "Senior/Corresponding author",
      "category": "epigenetics",
      "pdf": "papers/2025-a-scoping-review-of-epigenetic-signatures-of-diet-and-diet-related-metabolites.pdf",
      "thumb": "assets/thumbs/2025-a-scoping-review-of-epigenetic-signatures-of-diet-and-diet-related-metabolites-1.png",
      "evidence": "Synthesized EWAS evidence on diet and diet-related metabolite methylation signatures.",
      "contribution": "Organized links between nutrition-related exposures and cardiometabolic disease biology.",
      "significance": "Provides a map for future nutritional epigenetics and biomarker discovery."
    },
    {
      "id": "2025-externalizing-as-a-common-genetic-influence-for-a-broad-spectrum-of-substance-use-and-be",
      "year": 2025,
      "title": "Externalizing as a common genetic influence for a broad spectrum of substance use and behavioral conditions: A developmental perspective from the Avon Longitudinal Study of Parents and Children",
      "authors": "Deng WQ, Belisario K, Doggett A, Pigeyre M, Paré G, Munafò MR, et al.",
      "journal": "Addiction",
      "note": "First author",
      "category": "addiction_neurogenomics_behavioural_genetics",
      "pdf": "papers/2025-externalizing-as-a-common-genetic-influence-for-a-broad-spectrum-of-substance-use-and-be.pdf",
      "thumb": "assets/thumbs/2025-externalizing-as-a-common-genetic-influence-for-a-broad-spectrum-of-substance-use-and-be-1.png",
      "evidence": "Tested externalizing as a shared genetic influence across substance use and behavioral conditions.",
      "contribution": "Used a developmental ALSPAC perspective to connect broad liabilities over time.",
      "significance": "Strengthens the case for cross-condition genetic architecture in addiction and related behaviors."
    },
    {
      "id": "2025-genome-wide-association-studies-of-delay-discounting-and-impulsive-personality-traits-in",
      "year": 2025,
      "title": "Genome-Wide Association Studies of Delay Discounting and Impulsive Personality Traits in Children From the Adolescent Behavior and Cognitive Development Study",
      "authors": "Deng WQ, Elsayed M, Belisario KL, Sanchez-Roige S, Palmer AA, MacKillop J.",
      "journal": "Genes Brain Behav.",
      "note": "First author",
      "category": "addiction_neurogenomics_behavioural_genetics",
      "pdf": "papers/2025-genome-wide-association-studies-of-delay-discounting-and-impulsive-personality-traits-in.pdf",
      "thumb": "assets/thumbs/2025-genome-wide-association-studies-of-delay-discounting-and-impulsive-personality-traits-in-1.png",
      "evidence": "Ran GWAS of delay discounting and impulsive personality traits in children from ABCD.",
      "contribution": "Extended impulsivity genomics into a large developmental cohort.",
      "significance": "Adds early-life evidence for the genetic study of decision-making and behavioral regulation."
    },
    {
      "id": "2025-meta-analysis-examining-fetal-sex-specific-placental-dna-methylation-intensities-and-est",
      "year": 2025,
      "title": "Meta-analysis examining fetal sex-specific placental DNA methylation intensities and estimated cell composition post IVF",
      "authors": "Melanie Lemaire; Wei Q Deng; Keaton W Smith; Samantha L Wilson",
      "journal": "Molecular Human Reproduction",
      "note": "Co-author",
      "category": "epigenetics",
      "pdf": null,
      "thumb": null,
      "evidence": "Meta-analyzed fetal sex-specific placental methylation and estimated cell composition after IVF.",
      "contribution": "Contributed evidence on reproductive technology, placenta biology, and fetal sex differences.",
      "significance": "Adds molecular detail to how early developmental context may vary by fetal sex."
    },
    {
      "id": "2025-trajectory-of-early-life-adiposity-among-south-asian-children",
      "year": 2025,
      "title": "Trajectory of Early Life Adiposity Among South Asian Children",
      "authors": "Azab SM, Naqvi S, Rafiq T, et al.",
      "journal": "JAMA Netw Open",
      "note": "Co-author",
      "category": "cardiometabolic_aging",
      "pdf": null,
      "thumb": null,
      "evidence": "Characterized adiposity trajectories among South Asian children.",
      "contribution": "Helped define growth-pattern evidence in a population at elevated cardiometabolic risk.",
      "significance": "Supports earlier, population-tailored prevention strategies for childhood obesity risk."
    },
    {
      "id": "2024-a-method-to-estimate-the-contribution-of-rare-coding-variants-to-complex-trait-heritabil",
      "year": 2024,
      "title": "A method to estimate the contribution of rare coding variants to complex trait heritability",
      "authors": "Pathan N, Deng WQ, Di Scipio M, Khan M, Mao S, Morton RW, Lali R, et al.",
      "journal": "Nature Communications",
      "note": "Co-author",
      "category": "genetic_epidemiology",
      "pdf": null,
      "thumb": null,
      "evidence": "Adds peer-reviewed evidence in genetic epidemiology through a focused study of A method to estimate the contribution of rare coding variants to complex trait heritability.",
      "contribution": "Contributes statistical, cohort, or review evidence that extends the research program represented in this portal.",
      "significance": "Broadens the portfolio by connecting methods development with applied questions in genetics, behavior, and health."
    },
    {
      "id": "2024-consistent-cord-blood-dna-methylation-signatures-of-gestational-age-between-ethnic-cohor",
      "year": 2024,
      "title": "Consistent cord blood DNA methylation signatures of gestational age between ethnic cohorts",
      "authors": "Deng WQ, Pigeyre M, Azab SM, Wilson SL, Campbell N, Cawte N, et al.",
      "journal": "Clinical Epigenetics",
      "note": "First author",
      "category": "epigenetics",
      "pdf": "papers/2024-consistent-cord-blood-dna-methylation-signatures-of-gestational-age-between-ethnic-cohor.pdf",
      "thumb": "assets/thumbs/2024-consistent-cord-blood-dna-methylation-signatures-of-gestational-age-between-ethnic-cohor-1.png",
      "evidence": "Examined cord blood methylation signatures of gestational age across ethnic cohorts.",
      "contribution": "Identified consistency across South Asian and white European cohorts.",
      "significance": "Supports robust early-life epigenetic biomarkers that generalize across populations."
    },
    {
      "id": "2024-high-resolution-phewas-of-alcohol-related-polygenic-risk-scores",
      "year": 2024,
      "title": "High-resolution PheWAS of alcohol-related polygenic risk scores",
      "authors": "Deng WQ, Belisario K, Gray JC, Levitt EE, MacKillop J",
      "journal": "Alcohol and Alcoholism",
      "note": "First author",
      "category": "addiction_neurogenomics_behavioural_genetics",
      "pdf": "papers/2024-high-resolution-phewas-of-alcohol-related-polygenic-risk-scores.pdf",
      "thumb": "assets/thumbs/2024-high-resolution-phewas-of-alcohol-related-polygenic-risk-scores-1.png",
      "evidence": "Mapped alcohol-related polygenic scores against high-resolution behavioral phenotypes.",
      "contribution": "Identified mechanistic signals involving alcohol reinforcing value and drinking motives.",
      "significance": "Clarifies how genetic liability may operate through psychologically meaningful pathways."
    },
    {
      "id": "2024-longitudinal-characterization-of-impulsivity-phenotypes-boosts-signal-for-genomic-correl",
      "year": 2024,
      "title": "Longitudinal characterization of impulsivity phenotypes boosts signal for genomic correlates and heritability",
      "authors": "Deng WQ, Belisario K, Munafò MR, MacKillop J",
      "journal": "Molecular Psychiatry",
      "note": "First author",
      "category": "addiction_neurogenomics_behavioural_genetics",
      "pdf": "papers/2024-longitudinal-characterization-of-impulsivity-phenotypes-boosts-signal-for-genomic-correl.pdf",
      "thumb": "assets/thumbs/2024-longitudinal-characterization-of-impulsivity-phenotypes-boosts-signal-for-genomic-correl-1.png",
      "evidence": "Constructed longitudinal impulsivity phenotypes across repeated ALSPAC assessments.",
      "contribution": "Showed that longitudinal characterization boosts genomic signal and heritability estimates.",
      "significance": "Highlights phenotype engineering as a decisive step in behavioral genomics."
    },
    {
      "id": "2024-maternal-smoking-dna-methylation-risk-score-associated-with-health-outcomes-in-offspring",
      "year": 2024,
      "title": "Maternal smoking DNA methylation risk score associated with health outcomes in offspring",
      "authors": "Deng WQ, Cawte N, Campbell N, Azab SM, de Souza RJ, Lamri A, et al.",
      "journal": "eLife",
      "note": "First author",
      "category": "epigenetics",
      "pdf": "papers/2024-maternal-smoking-dna-methylation-risk-score-associated-with-health-outcomes-in-offspring.pdf",
      "thumb": "assets/thumbs/2024-maternal-smoking-dna-methylation-risk-score-associated-with-health-outcomes-in-offspring-1.png",
      "evidence": "Built and tested a maternal-smoking DNA methylation risk score in offspring.",
      "contribution": "Linked methylation signatures with offspring health outcomes in European and South Asian ancestry groups.",
      "significance": "Shows how prenatal exposure biomarkers can travel across ancestry-aware child health research."
    },
    {
      "id": "2024-mitochondrial-dna-copy-number-and-kidney-outcomes",
      "year": 2024,
      "title": "Mitochondrial DNA Copy Number and Kidney Outcomes",
      "authors": "Gaheer PS, Caltagirone G, Levin A, Deng WQ, Chong MR, Lanktree MB",
      "journal": "Journal of the American Society of Nephrology",
      "note": "Co-author",
      "category": "cardiometabolic_aging",
      "pdf": null,
      "thumb": null,
      "evidence": "Adds peer-reviewed evidence in cardiometabolic health and aging through a focused study of Mitochondrial DNA Copy Number and Kidney Outcomes.",
      "contribution": "Contributes statistical, cohort, or review evidence that extends the research program represented in this portal.",
      "significance": "Broadens the portfolio by connecting methods development with applied questions in genetics, behavior, and health."
    },
    {
      "id": "2023-leveraging-related-health-phenotypes-for-polygenic-prediction-of-impulsive-choice-impuls",
      "year": 2023,
      "title": "Leveraging related health phenotypes for polygenic prediction of impulsive choice, impulsive action, and impulsive personality traits in 1534 European ancestry community adults",
      "authors": "Deng WQ, Belisario K, Gray JC, Levitt EE, Mohammadi‐Shemirani P, et al.",
      "journal": "Genes, Brain and Behavior",
      "note": "First author",
      "category": "addiction_neurogenomics_behavioural_genetics",
      "pdf": "papers/2023-leveraging-related-health-phenotypes-for-polygenic-prediction-of-impulsive-choice-impuls.pdf",
      "thumb": "assets/thumbs/2023-leveraging-related-health-phenotypes-for-polygenic-prediction-of-impulsive-choice-impuls-1.png",
      "evidence": "Used related health phenotypes to improve polygenic prediction of impulsive traits.",
      "contribution": "Showed that broader phenotype information can sharpen prediction of impulsive choice, action, and personality.",
      "significance": "Links psychiatric and behavioral genetic prediction to richer phenotype architecture."
    },
    {
      "id": "2022-dimension-learning-using-penalized-probabilistic-pca",
      "year": 2022,
      "title": "Dimension learning using penalized probabilistic PCA",
      "authors": "Deng WQ, Craiu R",
      "journal": "Journal of Statistical Computation and Simulation",
      "note": "First author",
      "category": "statistical_methods",
      "pdf": "papers/2022-dimension-learning-using-penalized-probabilistic-pca.pdf",
      "thumb": "assets/thumbs/2022-dimension-learning-using-penalized-probabilistic-pca-1.png",
      "evidence": "Studied penalized probabilistic PCA for learning latent dimensionality.",
      "contribution": "Connected model complexity, penalization, and dimension selection in a unified framework.",
      "significance": "Supports more interpretable structure learning in high-dimensional data."
    },
    {
      "id": "2022-gjls2-an-r-package-for-generalized-joint-location-and-scale-analysis-in-x-inclusive-geno",
      "year": 2022,
      "title": "gJLS2: an R package for generalized joint location and scale analysis in X-inclusive genome-wide association studies",
      "authors": "Deng WQ, Sun L",
      "journal": "G3: Genes, Genomes, Genetics",
      "note": "First author",
      "category": "statistical_methods",
      "pdf": "papers/2022-gjls2-an-r-package-for-generalized-joint-location-and-scale-analysis-in-x-inclusive-geno.pdf",
      "thumb": "assets/thumbs/2022-gjls2-an-r-package-for-generalized-joint-location-and-scale-analysis-in-x-inclusive-geno-1.png",
      "evidence": "Released an R package for generalized joint location and scale analysis in X-inclusive GWAS.",
      "contribution": "Turned a specialized statistical framework into reusable software.",
      "significance": "Makes variance heterogeneity and X-chromosome analysis more accessible to applied researchers."
    },
    {
      "id": "2019-analytical-strategies-to-include-the-x-chromosome-in-variance-heterogeneity-analyses",
      "year": 2019,
      "title": "Analytical strategies to include the X-chromosome in variance heterogeneity analyses",
      "authors": "Deng WQ, Mao S, Kalnapenkis A, Magi R, Esko T, Paré G, Sun L",
      "journal": "Genetic Epidemiology",
      "note": "First author, IGES paper of the month",
      "category": "genetic_epidemiology",
      "pdf": "papers/2019-analytical-strategies-to-include-the-x-chromosome-in-variance-heterogeneity-analyses.pdf",
      "thumb": "assets/thumbs/2019-analytical-strategies-to-include-the-x-chromosome-in-variance-heterogeneity-analyses-1.png",
      "evidence": "Compared analytical choices for X-chromosome inclusion in variance heterogeneity analysis.",
      "contribution": "Demonstrated trait-specific polygenic variance structure when sex chromosomes are handled explicitly.",
      "significance": "Improves sex-aware genome-wide analysis rather than treating the X chromosome as an afterthought."
    },
    {
      "id": "2018-a-robust-method-to-estimate-regional-polygenic-correlation-under-misspecified-ld",
      "year": 2018,
      "title": "A robust method to estimate regional polygenic correlation under misspecified LD",
      "authors": "Paré G, Mao S, Deng WQ",
      "journal": "Genetic Epidemiology",
      "note": "Co-author",
      "category": "genetic_epidemiology",
      "pdf": null,
      "thumb": null,
      "evidence": "Adds peer-reviewed evidence in genetic epidemiology through a focused study of A robust method to estimate regional polygenic correlation under misspecified LD.",
      "contribution": "Contributes statistical, cohort, or review evidence that extends the research program represented in this portal.",
      "significance": "Broadens the portfolio by connecting methods development with applied questions in genetics, behavior, and health."
    },
    {
      "id": "2017-a-machine-learning-heuristic-to-improve-gene-score-prediction",
      "year": 2017,
      "title": "A machine-learning heuristic to improve gene score prediction",
      "authors": "Paré G, Mao S, Deng WQ",
      "journal": "Scientific Reports",
      "note": "Co-author",
      "category": "statistical_methods",
      "pdf": "papers/2017-a-machine-learning-heuristic-to-improve-gene-score-prediction.pdf",
      "thumb": "assets/thumbs/2017-a-machine-learning-heuristic-to-improve-gene-score-prediction-1.png",
      "evidence": "Adds peer-reviewed evidence in statistical methods through a focused study of A machine-learning heuristic to improve gene score prediction.",
      "contribution": "Contributes statistical, cohort, or review evidence that extends the research program represented in this portal.",
      "significance": "Broadens the portfolio by connecting methods development with applied questions in genetics, behavior, and health."
    },
    {
      "id": "2017-characterization-of-bmi-and-lipid-loci-for-gene-environment-interactions",
      "year": 2017,
      "title": "Characterization of BMI and lipid loci for gene-environment interactions",
      "authors": "Shungin D*, Deng WQ*, ..., Paul FW",
      "journal": "PLOS Genetics",
      "note": "Co-first author",
      "category": "genetic_epidemiology",
      "pdf": null,
      "thumb": null,
      "evidence": "Assessed BMI and lipid loci for gene-environment interaction patterns.",
      "contribution": "Contributed co-first-authored evidence on heterogeneity at established cardiometabolic loci.",
      "significance": "Shows that environmental context can refine interpretation of genetic associations."
    },
    {
      "id": "2016-contribution-of-regional-genetic-associations-to-complex-traits",
      "year": 2016,
      "title": "Contribution of regional genetic associations to complex traits",
      "authors": "Paré G, Mao S, Deng WQ",
      "journal": "Scientific Reports",
      "note": "Co-author",
      "category": "genetic_epidemiology",
      "pdf": null,
      "thumb": null,
      "evidence": "Adds peer-reviewed evidence in genetic epidemiology through a focused study of Contribution of regional genetic associations to complex traits.",
      "contribution": "Contributes statistical, cohort, or review evidence that extends the research program represented in this portal.",
      "significance": "Broadens the portfolio by connecting methods development with applied questions in genetics, behavior, and health."
    },
    {
      "id": "2015-large-region-joint-associations-and-complex-traits",
      "year": 2015,
      "title": "Large region joint associations and complex traits",
      "authors": "Paré G, Asma S, Deng WQ",
      "journal": "PLOS Genetics",
      "note": "Co-author",
      "category": "genetic_epidemiology",
      "pdf": null,
      "thumb": null,
      "evidence": "Adds peer-reviewed evidence in genetic epidemiology through a focused study of Large region joint associations and complex traits.",
      "contribution": "Contributes statistical, cohort, or review evidence that extends the research program represented in this portal.",
      "significance": "Broadens the portfolio by connecting methods development with applied questions in genetics, behavior, and health."
    },
    {
      "id": "2014-genetic-heterogeneity-and-type-2-diabetes-risk-in-south-asians-vs-white-populations",
      "year": 2014,
      "title": "Genetic heterogeneity and type 2 diabetes risk in South Asians vs. White populations",
      "authors": "Sohani ZN, Deng WQ, Paré G, Meyre D, Gerstein HC, Anand SS",
      "journal": "Diabetologia",
      "note": "Co-author",
      "category": "cardiometabolic_aging",
      "pdf": null,
      "thumb": null,
      "evidence": "Adds peer-reviewed evidence in cardiometabolic health and aging through a focused study of Genetic heterogeneity and type 2 diabetes risk in South Asians vs. White populations.",
      "contribution": "Contributes statistical, cohort, or review evidence that extends the research program represented in this portal.",
      "significance": "Broadens the portfolio by connecting methods development with applied questions in genetics, behavior, and health."
    },
    {
      "id": "2014-subclinical-atrial-fibrillation-and-embolic-events",
      "year": 2014,
      "title": "Subclinical atrial fibrillation and embolic events",
      "authors": "Brambatti M, Connolly SJ, Gold MR, ..., Deng WQ (15/17), ..., Healey JS",
      "journal": "Circulation",
      "note": "Co-author",
      "category": "cardiometabolic_aging",
      "pdf": null,
      "thumb": null,
      "evidence": "Adds peer-reviewed evidence in cardiometabolic health and aging through a focused study of Subclinical atrial fibrillation and embolic events.",
      "contribution": "Contributes statistical, cohort, or review evidence that extends the research program represented in this portal.",
      "significance": "Broadens the portfolio by connecting methods development with applied questions in genetics, behavior, and health."
    },
    {
      "id": "2013-meta-analysis-of-snps-in-variance-heterogeneity-using-levene-s-test",
      "year": 2013,
      "title": "Meta-analysis of SNPs in variance heterogeneity using Levene’s test",
      "authors": "Deng WQ, Asma S, Paré G",
      "journal": "European Journal of Human Genetics",
      "note": "First author",
      "category": "genetic_epidemiology",
      "pdf": null,
      "thumb": null,
      "evidence": "Evaluated how Levene-test variance heterogeneity signals can be meta-analyzed across studies.",
      "contribution": "Provided a framework for combining scale-effect evidence beyond mean association testing.",
      "significance": "Expanded the toolkit for detecting genetic effects that alter phenotypic variability."
    },
    {
      "id": "2011-a-fast-algorithm-to-optimize-snp-prioritization-for-gene-gene-and-gene-environment-inter",
      "year": 2011,
      "title": "A fast algorithm to optimize SNP prioritization for gene-gene and gene-environment interactions",
      "authors": "Deng WQ, Paré G",
      "journal": "Genetic Epidemiology",
      "note": "First author",
      "category": "genetic_epidemiology",
      "pdf": null,
      "thumb": null,
      "evidence": "Introduced a faster strategy for prioritizing SNPs in interaction analyses.",
      "contribution": "Reduced computational friction in searching gene-gene and gene-environment interaction signals.",
      "significance": "Helped make interaction-aware genetic discovery more tractable for complex trait studies."
    },
    {
      "id": "2011-fto-rs9939609-variant-and-body-fat-depots-in-a-multi-ethnic-cohort",
      "year": 2011,
      "title": "FTO rs9939609 variant and body fat depots in a multi-ethnic cohort",
      "authors": "Lear SA, Deng WQ, Paré G, Sulistyoningrum DC, Loos RJF, Devlin AM",
      "journal": "Genetics Research",
      "note": "Co-author",
      "category": "cardiometabolic_aging",
      "pdf": null,
      "thumb": null,
      "evidence": "Adds peer-reviewed evidence in cardiometabolic health and aging through a focused study of FTO rs9939609 variant and body fat depots in a multi-ethnic cohort.",
      "contribution": "Contributes statistical, cohort, or review evidence that extends the research program represented in this portal.",
      "significance": "Broadens the portfolio by connecting methods development with applied questions in genetics, behavior, and health."
    }
  ]
};
